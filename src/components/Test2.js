import React from "react";

export default function Test2(props) {
    const displayEvents = (props) => {
        const events = Object.values(props)[0];
        console.log(props);
        console.log(events);
        return (
            events.map(event => {
                console.log(event);
                return (
                    <tr>
                        <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                            {event.actor.id}
                        </th>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            {event.actor.login}
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            {event.actor.display_login}
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            {event.actor.gravatar_id}
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            {event.actor.url}
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                            {event.actor.avatar_url}
                        </td>
                    </tr>
                )
            })
        )
    }

    return (
        <>
            {displayEvents(props)}
        </>
    )
}