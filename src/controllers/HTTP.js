import axios from "axios";
var client = axios.create(
    {
        baseURL: "http://127.0.0.1:8080",
        headers:
        {
            "Content-type": "application/json",
        }
    }
);

export function GET(url)
{
    return new Promise((resolve) =>
    {
        client.get(url).then(function (response, err)
        {
            resolve(response);
        }
        ).catch(function (error) 
        {
            resolve(error.response.status);
        });
    });
}

export function POST(url, data)
{
    return new Promise((resolve) =>
    {
        client.post(url, data).then(function (response)
        {
            resolve(response);
        }
        ).catch(function (error) 
        {
            resolve(error.response.status);
        });
    });
}

export function PUT(url, data)
{
    return new Promise((resolve) =>
    {
        client.put(url, data).then(function (response)
        {
            resolve(response);
        }
        ).catch(function (error) 
        {
            resolve(error.response.status);
        });
    });
}

export function DELETE(url)
{
    return new Promise((resolve) =>
    {
        client.delete(url).then(function (response)
        {
            resolve(response);
        }
        ).catch(function (error) 
        {
            resolve(error.response.status);
        });
    });
}

