import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import "./SCSS/Home.scss";

export default function Home() {
  const [userName, setUserName] = useState("goldstain09");
  const [userAvatar, setUserAvatar] = useState("");
  const [contributionData, setContributionData] = useState({});
  const [error, setError] = useState("");

  const gettingData = useCallback(
    async (username) => {
      try {
        setError("");
        const avatarResponse = await axios.get(
          `https://api.github.com/users/${username}`
        );
        if (avatarResponse.data.hasOwnProperty("avatar_url")) {
          setUserAvatar(avatarResponse.data.avatar_url);
        } else {
          setUserAvatar(
            "https://firebasestorage.googleapis.com/v0/b/blog-app-2d912.appspot.com/o/icon.webp?alt=media&token=99270953-b1b0-40bd-99a8-e381c255afcb"
          );
        }
        const response = await axios.post(
          "https://api.github.com/graphql",
          {
            query: `
              query {
                user(login: "${username}") {
                  contributionsCollection {
                    contributionCalendar {
                      totalContributions
                      weeks {
                        contributionDays {
                          color
                          contributionCount
                          date
                        }
                      }
                    }
                  }
                }
              }
            `,
          },
          {
            headers: {
              Authorization: `Bearer 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`,
            },
          }
        );

        const contributionGraph =
          response.data.data.user.contributionsCollection.contributionCalendar;
        // console.log(response.data);
        setContributionData(contributionGraph);
      } catch (error) {
        setError(error.message);
      }
    },
    [setContributionData]
  );
  useEffect(() => {
    gettingData(userName);
  }, [gettingData]);
  //   console.log(contributionData);
  return (
    <>
      {error !== "" ? (
        <div className="text-center mt-5 pt-5">
          <h1 className="text-center" style={{ fontWeight: "100" }}>
            No User Found! {error}
          </h1>
          <button
            className="btn btn-outline-danger mt-3"
            onClick={() => {
              setError("");
              setUserName("");
              gettingData("goldstain09");
            }}
          >
            Try Again
          </button>
        </div>
      ) : (
        <>
          <form
            className="container mt-5"
            onSubmit={(e) => {
              e.preventDefault();
              if (userName !== "") {
                gettingData(userName);
              }
            }}
          >
            <div className="row">
              <div className="col-11">
                <input
                  type="text"
                  className="form-control w-100"
                  placeholder="Enter github username here"
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>
              <div className="col-1">
                <button type="submit" className="btn btn-primary w-100">
                  <i className="bi bi-search"></i>
                </button>
              </div>
            </div>
          </form>

          <div className="container-fluid mt-5 pt-5">
            <div className="container">
              {userAvatar !== "" && <img src={userAvatar} alt="avatar" />}
              {contributionData.hasOwnProperty("totalContributions") && (
                <h6 className="h6">
                  Total Contributions:{contributionData.totalContributions}{" "}
                  (this year){" "}
                  {userName.toLowerCase() === "goldstain09" && "(Deafult)"}
                </h6>
              )}
            </div>
            <div className="row d-flex justify-content-center">
              {contributionData.hasOwnProperty("weeks") &&
              contributionData.weeks.length > 0 ? (
                contributionData.weeks.map((item, index) => (
                  <div key={index} className="weekDiv mt-3">
                    {item.contributionDays.map((item, index) => (
                      <div
                        key={index}
                        style={{ background: `${item.color}` }}
                        className="dayDiv"
                      >
                        {item.contributionCount}
                      </div>
                    ))}
                  </div>
                ))
              ) : (
                <>
                  <h1
                    className="h1 text-dark text-center"
                    style={{ fontWeight: "100" }}
                  >
                    No User Found!
                  </h1>
                </>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
}
