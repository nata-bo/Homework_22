import { useEffect, useState } from "react";

export default function Activity(): JSX.Element {
  const [url, setUrl] = useState<string>("");

  const serviceUrl: string = " https://www.boredapi.com/api/activity";

  async function getInfo() {
    const res = await fetch(serviceUrl);
    const resultObj = await res.json();
    const { activity } = resultObj;
    setUrl(activity);
  }
  useEffect(() => {
    getInfo();
  }, []);

  return (
    <>
      <h5>Homework 23</h5>
      <h2>{url}</h2>
    </>
  );
}
