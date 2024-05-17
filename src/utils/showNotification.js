const showNotification = (data) => {
  if (Notification.permission === "granted") {
    notification(data);
  } else if (Notification.permission !== "denied") {
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        notification(data);
      }
    });
  }
};

const notification = (data) => {
  const options = {
    body: data,
    icon: "/path/to/icon.png",
  };

  const notification = new Notification(
    "BloodChain: Empowering Lifesavers With BlockChain",
    options
  );

  notification.onclick = () => {
    window.focus();
    notification.close();
  };
};

export default showNotification;
