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
            <div className="text-end ml-3">
                <form className="flex flex-col w-full justify-center">
                    <div className="relative">
                        <input type="submit" onSubmit={Submit} value="Button" id="button" className="rounded-lg flex-1 appearance-none border border-main-500 w-full py-2 px-4 bg-main-300 text-gray-100 placeholder-grey-500 text-base focus:outline-none" />
                    </div>
                </form>
            </div>
        </>
    );
}