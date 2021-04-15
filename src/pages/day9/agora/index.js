import AgoraRTC from "agora-rtc-sdk-ng";

const client = AgoraRTC.createClient({
  mode: "rtc",
  codec: "vp8",
});

const rtc = {
  client: null,
  localAudioTrack: null,
};

const options = {};
