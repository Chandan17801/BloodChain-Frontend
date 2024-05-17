const showNotification = () => {
  if (Notification.permission === "granted") {
    notification();
  } else if (Notification.permission !== "denied") {
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        notification();
      }
    });
  }
};

const notification = () => {
  const options = {
    body: "Here is the notification body!",
    icon: "/path/to/icon.png",
  };

  const notification = new Notification("Notification Title", options);

  notification.onclick = () => {
    window.focus();
    notification.close();
  };
};

export default showNotification;
