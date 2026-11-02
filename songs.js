// Song data for the listen-together page.
// Add a song: copy one entry, set videoId (YouTube), offset (sec the MV lags the audio track),
// and lines = [audioTrackSeconds, korean, english].  Timing source: Bugs synced lyrics.
window.SONGS = [
  {
    id: "night-morning",
    title: "그대의 밤, 나의 아침",
    titleEn: "Your Night, My Morning",
    artist: "Brown Eyed Soul",
    videoId: "giZqfyD__s0",
    offset: 3.5, // MV intro is longer than the audio track; checked against YouTube caption timing
    note: "A shy confession. He has been lying awake all night thinking of her, and wants to say it before the night is over, so his morning can be the one that greets her night.",
    lines: [
      [20.5, "사랑이 들리나요 내 맘이 그런가 봐요", "Can you hear the love? I guess that's just my heart"],
      [38.2, "떨어지는 꽃잎에도 설레는 날엔", "On days when even falling petals make my heart flutter,"],
      [46.7, "그대 생각에 잠 못 이루죠", "I lie awake thinking of you"],
      [55.7, "가슴이 떨리네요 왜 이리 망설일까요", "My heart is trembling. Why do I keep holding back?"],
      [72.7, "이 밤이 다 지나기 전에 말할게요", "Before this night is over, I'll tell you"],
      [81.4, "그냥 모른 척 웃어주세요", "Just pretend you didn't know, and smile for me"],
      [90.0, "그대의 밤을 이제 내 아침이 맞이해요", "Now my morning rises to meet your night"],
      [99.1, "나의 허전했던 많은 날에 기쁨이 돼줘요", "Be the joy in all my empty days"],
      [107.4, "그대의 마음속에 늘 내가 있어 줄게요", "I'll always be there, inside your heart"],
      [116.5, "사랑을 고백한 지금의 이 마음 그대로", "Just as I am now, with this heart confessing love"],
      [134.5, "내 말이 자꾸 길어져도", "Even if I keep on talking too long,"],
      [142.5, "그냥 모른 척 들어주세요", "just pretend you don't notice, and listen"],
      [150.3, "그대의 밤을 이제 내 아침이 맞이해요", "Now my morning rises to meet your night"],
      [160.3, "나의 허전했던 많은 날에 기쁨이 돼줘요", "Be the joy in all my empty days"],
      [167.8, "그대의 마음속에 늘 내가 있어 줄게요", "I'll always be there, inside your heart"],
      [177.7, "사랑을 고백한 지금의 이 마음 그대로", "Just as I am now, with this heart confessing love"],
      [187.5, "사랑보다 아름다운 사람 그대여", "You, more beautiful than love itself"],
      [196.3, "서로 믿어요 시간 속에 변해가지 않는 맘을", "Let's trust each other, hearts that won't change with time"],
      [207.1, "수많은 밤을 이제 우리의 날을 위해", "Through countless nights to come, for the days that will be ours,"],
      [216.6, "그대 나와 함께 해요", "stay with me"],
      [220.6, "나의 허전했던 많은 날에 행복이 돼줘요", "Be the happiness in all my empty days"],
      [228.6, "그대의 마음속에 나 항상 있어 줄게요", "I'll be in your heart, always"],
      [237.4, "처음 우리 그날처럼 그대", "Just like our very first day, my love"],
    ],
  },
];
