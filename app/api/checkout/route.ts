import { NextResponse } from "next/server";

// PayPal OAuth: get access token
async function getPayPalToken() {
  const auth = Buffer.from(
    `${process.env.PAYPAL_CLIENT_ID}:${process.env.PAYPAL_SECRET}`
  ).toString("base64");

  const res = await fetch(`${process.env.PAYPAL_API_URL}/v1/oauth2/token`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${auth}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials",
  });

  const data = await res.json();
  return data.access_token;
}

export async function GET() {
  try {
    const token = await getPayPalToken();

    // Create a subscription
    const res = await fetch(`${process.env.PAYPAL_API_URL}/v1/billing/subscriptions`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        plan_id: process.env.PAYPAL_PLAN_ID,
        application_context: {
          brand_name: "SunnyDay AI Email Writer",
          return_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
          cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/#pricing`,
          user_action: "SUBSCRIBE_NOW",
        },
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      return NextResponse.json(
        { error: data.message || "Failed to create subscription" },
        { status: 500 }
      );
    }

    // Find the approval URL
    const approveLink = data.links.find(
      (l: { rel: string; href: string }) => l.rel === "approve"
    );

    return NextResponse.redirect(approveLink.href, 303);
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
