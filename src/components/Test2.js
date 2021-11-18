import React from "react";

//components

import TableDropdown from "components/Dropdowns/TableDropdown.js";

export default function Test2(props) {
  const displayEvents = (props) => {
    const { events } = props;

    if (events.length > 0) {
      return events.map((event) => {
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
            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
              <TableDropdown />
            </td>
          </tr>
        );
      });
    } else {
        return (<h3>No data yet</h3>)
    }
  };

  return <>{displayEvents(props)}</>;
}
