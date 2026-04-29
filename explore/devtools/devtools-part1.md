# DevTools - Network Tab

1. **What is the name of the new json file?**
   `citylots.json`

2. **Which file initiated the download of the new file?**
   `expose.js` (Visible under the "Initiator" column in the main network list).

3. **What is the file size of the downloaded file?**
   `584944` bytes (This is the `content-length` found in the Response Headers).

4. **How long did it take to download?**
   `562 ms` (As seen in the "Time" column of the network log).

5. **What was your User-Agent for the browser that made the request?**
   `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36`
   *(Note: This is found by scrolling down to "Request Headers" in the side panel).*

6. **In the response header, what type of server did it come from?**
   `GitHub.com` (Indicated by the `server` header in the Response Headers).

7. **When was the file last modified?**
   `Tue, 21 Apr 2026 05:07:14 GMT` (As seen in the `last-modified` Response Header).

8. **What was the Content-Type of the file?**
   `application/json; charset=utf-8` (As seen in the `content-type` Response Header).

9. **Which function inside the initiating file made the request?**
   `fetchData` (Found by clicking the **Initiator** tab in the side panel and viewing the call stack).
