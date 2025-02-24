# Node.js Server Crashing Issue

This repository demonstrates a bug in a Node.js server where it unexpectedly crashes after processing a certain number of requests.  The cause is subtle and not immediately apparent in the error logs.

## Bug Description

A simple HTTP server is created using Node.js's `http` module. Under normal circumstances, the server should continue to handle requests indefinitely. However, after a certain number of requests are handled (this number is not consistent and depends on factors such as system load and request content), the server crashes without leaving informative error messages.

## Solution

The solution involves identifying and handling potential memory leaks and resource exhaustion issues.  In this case, the server was missing crucial error handling mechanisms to deal with client disconnections and unhandled exceptions, resulting in resource exhaustion and process termination.