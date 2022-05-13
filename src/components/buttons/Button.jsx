import React from "react";

export default function Button({ href })
{
    const Submit = (e) =>
    {
        e.PreventDevault();
        window.location.href = href;
    }

    return (
        <>
            <div className="text-end">
                <form className="flex flex-col justify-center">
                    <div className="relative">
                        <input type="submit" onSubmit={Submit} value="Button" id="button" className="rounded-lg flex-1 appearance-none border border-main-800 py-2 px-4 bg-main-500 text-main-100 text-base focus:outline-none" />
                    </div>
                </form>
            </div>
        </>
    );
}