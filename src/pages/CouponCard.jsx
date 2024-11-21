import React, { useEffect, useRef } from "react";
import { useRouter } from "next/router";

function CouponCard({ queryString, color, userAgent }) {
  const router = useRouter();
  const referCouponCardRef = useRef(null);
  const welcomeCouponCardRef = useRef(null);
  const appTitleRef = useRef(null);

  useEffect(() => {
    const checkAndDirect = async (redirectTo) => {
      try {
        const fetchURL = `/api/get-redis-profile-only?queryString=${queryString}`;
        const response = await fetch(fetchURL, {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
        });
        const data = await response.json();

        let decryptedMobileStr = data.decryptedMobile.toString();
        if (decryptedMobileStr[0] === "1" && decryptedMobileStr.length > 10) {
          const props = { desiredUrl: redirectTo };
          const redirectUrl = `/signin?redirectTo=${encodeURIComponent(
            JSON.stringify(props)
          )}`;
          router.push(redirectUrl);
        } else {
          router.push(`${redirectTo}?color=${color}`);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    if (userAgent === "MZAPP001" && appTitleRef.current) {
      appTitleRef.current.style.display = "block";
    }
  }, [queryString, color, userAgent, router]);

  const handleReferClick = () => {
    checkAndDirect("/referAndEarn");
  };

  const handleWelcomeClick = () => {
    checkAndDirect("/wallet");
  };

  return (
    <div className="row">
      <div className="col-sm-12 col-md-4 col-xl-4 mb-10">
        <a
          id="referCouponCard"
          role="button"
          className="Coupon_Card_Clickble"
          ref={referCouponCardRef}
          onClick={handleReferClick}
        >
          <div className="Coupon_Card static">
            <div className="Coupon_Card_Content staticContent align-items-center">
              <div className="Coupon_Card_innerContainer">
                <div className="Coupon_Card_Line staticCouponLine d-flex justify-content-between">
                  <div className="Coupon_Card_title staticTitle">
                    Invite your friend & get Rs.50* on wallet
                  </div>
                  <svg className="Coupon_Card_Arrow" height="25" width="20">
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M8 7.4L9.4 6l6 6-6 6L8 16.6l4.6-4.6z"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="Coupon_Card_bottom staticBottom">
              <div className="Coupon_Card_Code">
                <strong className="Coupon_Card_Bold">Click here to refer</strong>
              </div>
            </div>
          </div>
        </a>
      </div>

      <div className="col-sm-12 col-md-4 col-xl-4 mb-10">
        <a
          id="welcomeCouponCard"
          role="button"
          className="Coupon_Card_Clickble"
          ref={welcomeCouponCardRef}
          onClick={handleWelcomeClick}
        >
          <div className="Coupon_Card static">
            <div className="Coupon_Card_Content staticContent align-items-center">
              <div className="Coupon_Card_innerContainer">
                <div className="Coupon_Card_Line staticCouponLine d-flex justify-content-between">
                  <div className="Coupon_Card_title staticTitle">
                    Welcome Offer - Flat 10% OFF on your first order!
                  </div>
                  <svg className="Coupon_Card_Arrow" height="25" width="20">
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M8 7.4L9.4 6l6 6-6 6L8 16.6l4.6-4.6z"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="Coupon_Card_bottom staticBottom">
              <div className="Coupon_Card_Code">
                <strong className="Coupon_Card_Bold">Use Code: WELCOME10</strong>
              </div>
            </div>
          </div>
        </a>
      </div>
      
      <div id="AppTitle" ref={appTitleRef} style={{ display: "none" }}>
        App Title
      </div>
    </div>
  );
}

export default CouponCard;
