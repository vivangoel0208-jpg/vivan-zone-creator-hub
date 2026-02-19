const DiscordWidget = () => {
  return (
    <div className="w-full flex justify-center">
      <iframe
        src="https://e.widgetbot.io/channels/1450353490625953948"
        className="w-full max-w-[800px] h-[500px] md:h-[600px] rounded-lg border border-border"
        allowTransparency
        title="Discord Widget"
      />
    </div>
  );
};

export default DiscordWidget;
