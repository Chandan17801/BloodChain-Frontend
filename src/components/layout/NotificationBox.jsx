import React from "react";

function NotificationBox() {
  const notifications = [
    {
      title: "Blood Request",
      time: "1 min ago",
      description: "You have a blood request for B+ from XYZ Hospital",
    },
    {
      title: "Blood Request",
      time: "19 min ago",
      description: "You have a blood request for B+ from XYZ Hospital",
    },
    {
      title: "Blood Request",
      time: "19 min ago",
      description: "You have a blood request for B+ from XYZ Hospital",
    },
    {
      title: "Blood Request",
      time: "19 min ago",
      description: "You have a blood request for B+ from XYZ Hospital",
    },
    {
      title: "Blood Request",
      time: "19 min ago",
      description: "You have a blood request for B+ from XYZ Hospital",
    },
    {
      title: "Blood Request",
      time: "19 min ago",
      description: "You have a blood request for B+ from XYZ Hospital",
    },
  ];
  return (
    <div
      className="mont z-10 w-[500px] flex flex-col gap-4 justify-center rounded-md shadow-md shadow-gray-800 items-center p-4 absolute top-20 left-32 bg-white"
      style={{ overflowY: "auto", maxHeight: "350px" }}
    >
      {notifications.map((notification, index) => (
        <div key={index} className="pb-4 w-full flex flex-col gap-1 border-b-2 ">
          <div className="flex flex-row justify-between pr-4">
            <div className="text-sm font-semibold text-gray-500">{notification.title}</div>
            <div className="text-xs text-gray-600">{notification.time}</div>
          </div>
          <div className="text-sm text-gray-800">{notification.description}</div>
        </div>
      ))}
    </div>
  );
}

export default NotificationBox;
