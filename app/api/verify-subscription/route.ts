import { NextResponse } from "next/server";
import { createHmac } from "crypto";

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

function generateLicenseKey(subscriptionId: string): string {
  const secret = process.env.LICENSE_SECRET || "default-secret-change-me";
  const hmac = createHmac("sha256", secret).update(subscriptionId).digest("hex");
  // Format: SDEW-XXXX-XXXX-XXXX-XXXX (take first 32 chars, group by 4)
  const short = hmac.substring(0, 32).toUpperCase();
  return `SDEW-${short.slice(0, 4)}-${short.slice(4, 8)}-${short.slice(8, 12)}-${short.slice(12, 16)}`;
}

export async function POST(request: Request) {
  try {
    const { subscription_id } = await request.json();

    if (!subscription_id) {
      return NextResponse.json(
        { error: "Missing subscription_id" },
        { status: 400 }
      );
    }

    const token = await getPayPalToken();

    // Query subscription status from PayPal
    const res = await fetch(
      `${process.env.PAYPAL_API_URL}/v1/billing/subscriptions/${subscription_id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!res.ok) {
      return NextResponse.json(
        { error: "Failed to verify subscription" },
        { status: 500 }
      );
    }

    const data = await res.json();

    if (data.status !== "ACTIVE") {
      return NextResponse.json(
        { error: "Subscription is not active", status: data.status },
        { status: 400 }
      );
    }

    const licenseKey = generateLicenseKey(subscription_id);
    const email = data.subscriber?.email_address || "";

    return NextResponse.json({
      success: true,
      license_key: licenseKey,
      email,
      plan: "Pro",
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
