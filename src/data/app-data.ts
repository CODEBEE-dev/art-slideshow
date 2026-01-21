import thumbnail1 from "@/assets/images-1/thumbnail.jpg";
import small1 from "@/assets/images-1/hero-small.jpg";
import large1 from "@/assets/images-1/hero-large.jpg";
import gallery1 from "@/assets/images-1/gallery.jpg";
import artist1 from "@/assets/images-1/artist.jpg";

import thumbnail2 from "@/assets/images-2/thumbnail.jpg";
import small2 from "@/assets/images-2/hero-small.jpg";
import large2 from "@/assets/images-2/hero-large.jpg";
import gallery2 from "@/assets/images-2/gallery.jpg";
import artist2 from "@/assets/images-2/artist.jpg";

import thumbnail3 from "@/assets/images-3/thumbnail.jpg";
import small3 from "@/assets/images-3/hero-small.jpg";
import large3 from "@/assets/images-3/hero-large.jpg";
import gallery3 from "@/assets/images-3/gallery.jpg";
import artist3 from "@/assets/images-3/artist.jpg";

import thumbnail4 from "@/assets/images-4/thumbnail.jpg";
import small4 from "@/assets/images-4/hero-small.jpg";
import large4 from "@/assets/images-4/hero-large.jpg";
import gallery4 from "@/assets/images-4/gallery.jpg";
import artist4 from "@/assets/images-4/artist.jpg";

import thumbnail5 from "@/assets/images-5/thumbnail.jpg";
import small5 from "@/assets/images-5/hero-small.jpg";
import large5 from "@/assets/images-5/hero-large.jpg";
import gallery5 from "@/assets/images-5/gallery.jpg";
import artist5 from "@/assets/images-5/artist.jpg";

import thumbnail6 from "@/assets/images-6/thumbnail.jpg";
import small6 from "@/assets/images-6/hero-small.jpg";
import large6 from "@/assets/images-6/hero-large.jpg";
import gallery6 from "@/assets/images-6/gallery.jpg";
import artist6 from "@/assets/images-6/artist.jpg";

import thumbnail7 from "@/assets/images-7/thumbnail.jpg";
import small7 from "@/assets/images-7/hero-small.jpg";
import large7 from "@/assets/images-7/hero-large.jpg";
import gallery7 from "@/assets/images-7/gallery.jpg";
import artist7 from "@/assets/images-7/artist.jpg";

import thumbnail8 from "@/assets/images-8/thumbnail.jpg";
import small8 from "@/assets/images-8/hero-small.jpg";
import large8 from "@/assets/images-8/hero-large.jpg";
import gallery8 from "@/assets/images-8/gallery.jpg";
import artist8 from "@/assets/images-5/artist.jpg";

import thumbnail9 from "@/assets/images-9/thumbnail.jpg";
import small9 from "@/assets/images-9/hero-small.jpg";
import large9 from "@/assets/images-9/hero-large.jpg";
import gallery9 from "@/assets/images-9/gallery.jpg";
import artist9 from "@/assets/images-9/artist.jpg";

import thumbnail10 from "@/assets/images-10/thumbnail.jpg";
import small10 from "@/assets/images-10/hero-small.jpg";
import large10 from "@/assets/images-10/hero-large.jpg";
import gallery10 from "@/assets/images-10/gallery.jpg";
import artist10 from "@/assets/images-10/artist.jpg";

import thumbnail11 from "@/assets/images-11/thumbnail.jpg";
import small11 from "@/assets/images-11/hero-small.jpg";
import large11 from "@/assets/images-11/hero-large.jpg";
import gallery11 from "@/assets/images-11/gallery.jpg";
import artist11 from "@/assets/images-11/artist.jpg";

import thumbnail12 from "@/assets/images-12/thumbnail.jpg";
import small12 from "@/assets/images-12/hero-small.jpg";
import large12 from "@/assets/images-12/hero-large.jpg";
import gallery12 from "@/assets/images-12/gallery.jpg";
import artist12 from "@/assets/images-12/artist.jpg";

import thumbnail13 from "@/assets/images-13/thumbnail.jpg";
import small13 from "@/assets/images-13/hero-small.jpg";
import large13 from "@/assets/images-13/hero-large.jpg";
import gallery13 from "@/assets/images-13/gallery.jpg";
import artist13 from "@/assets/images-13/artist.jpg";

import thumbnail14 from "@/assets/images-14/thumbnail.jpg";
import small14 from "@/assets/images-14/hero-small.jpg";
import large14 from "@/assets/images-14/hero-large.jpg";
import gallery14 from "@/assets/images-14/gallery.jpg";
import artist14 from "@/assets/images-14/artist.jpg";

import thumbnail15 from "@/assets/images-15/thumbnail.jpg";
import small15 from "@/assets/images-15/hero-small.jpg";
import large15 from "@/assets/images-15/hero-large.jpg";
import gallery15 from "@/assets/images-15/gallery.jpg";
import artist15 from "@/assets/images-15/artist.jpg";

export interface Painting {
  name: string;
  year: number;
  description: string;
  source: string;
  artist: string;
  style: string;
  class: string;
  images?: {
    thumbnail: string;
    small: string;
    large: string;
    gallery: string;
    artist: string;
  };
}

export const paintings: Painting[] = [
  {
    name: "별이 빛나는 밤",
    year: 1889,
    description:
      '비록 <별이 빛나는 밤>이 반 고흐의 1층 작업실에서 낮에 그려졌지만, 이 그림이 기억을 바탕으로 그려졌다고 말하는 것은 부정확할 것입니다. 이 풍경은 그의 침실 창문에서 동쪽을 향해 보이는 풍경으로 확인되었으며, 반 고흐는 이 풍경을 <별이 빛나는 밤>을 포함하여 21번 이상 변형하여 그렸습니다. 1889년 5월 23일경 그는 형 테오에게 이렇게 썼습니다. "철창이 있는 창문을 통해 밀밭으로 둘러싸인 광장을 볼 수 있고... 그 위로 아침에 태양이 온전한 영광 속에서 떠오르는 것을 지켜본다."',
    source: "https://en.wikipedia.org/wiki/The_Starry_Night",
    artist: "Vincent Van Gogh",
    style: "height: 250px",
    class: "max-w-360 max-h-238",
    images: {
      thumbnail: thumbnail1,
      small: small1,
      large: large1,
      gallery: gallery1,
      artist: artist1,
    },
  },
  {
    name: "갈릴리 바다의 폭풍",
    year: 1633,
    description:
      "이 세로형 그림은 그리스도의 제자들이 거센 폭풍에 맞서 필사적으로 싸우며 어선의 통제권을 되찾으려는 모습을 근접 촬영한 듯이 보여줍니다. 거대한 파도가 배의 이물을 때리고 돛을 찢어버립니다. 제자 중 한 명은 배 옆으로 토하고 있습니다. 또 다른 한 명은 관람자를 직접 바라보고 있는데, 이는 화가의 자화상입니다. 오른쪽에 묘사된 그리스도만이 차분함을 유지하고 있습니다.",
    source: "https://en.wikipedia.org/wiki/The_Storm_on_the_Sea_of_Galilee",
    artist: "Rembrandt",
    style: "height: 340px",
    class: "max-w-380 max-h-302",
    images: {
      thumbnail: thumbnail2,
      small: small2,
      large: large2,
      gallery: gallery2,
      artist: artist2,
    },
  },
  {
    name: "담비를 안은 여인",
    year: 1489,
    description:
      "이탈리아 르네상스 화가 레오나르도 다 빈치의 작품으로 널리 알려진 초상화입니다. 1489~1491년경 제작된 이 작품은 호두나무 판 위에 유채로 그려졌습니다. 모델은 밀라노 공작 루도비코 스포르차('일 모로')의 정부였던 체칠리아 갈레라니이며, 당시 레오나르도는 스포르차 궁정의 화가로 재직 중이었습니다. 이 작품은 레오나르도가 그린 여성 초상화 중 현존하는 단 4점 중 하나로, 나머지 세 작품은 '지네브라 데 벤치', '라 벨 페로니에르', 그리고 '모나리자'입니다.",
    source: "https://en.wikipedia.org/wiki/Lady_with_an_Ermine",
    artist: "Leonardo da Vinci",
    style: "height: 420px",
    class: "max-h-238",
    images: {
      thumbnail: thumbnail3,
      small: small3,
      large: large3,
      gallery: gallery3,
      artist: artist3,
    },
},
  {
    name: "빨간 조끼를 입은 소년",
    year: 1889,
    description:
      "세잔은 빨간 조끼를 입은 이 이탈리아 소년의 유화 초상화를 네 점 그렸으며, 모두 다른 자세로 그려져 인물과 공간의 관계를 연구할 수 있게 했습니다. 네 작품 중 가장 유명하고 이 제목으로 일반적으로 불리는 작품은 소년이 테이블에 팔꿈치를 올리고 손으로 머리를 받치며 우울한 자세로 앉아 있는 것을 묘사한 것입니다. 현재 스위스 취리히에 소장되어 있습니다. 다른 세 점의 초상화는 다른 자세로 그려졌으며 미국의 박물관에 있습니다.",
    source: "https://en.wikipedia.org/wiki/The_Boy_in_the_Red_Vest",
    artist: "Paul Cézanne",
    style: "height: 260px",
    class: "max-h-238",
    images: {
      thumbnail: thumbnail4,
      small: small4,
      large: large4,
      gallery: gallery4,
      artist: artist4,
    },
  },
  {
    name: "진주 귀걸이를 한 소녀",
    year: 1665,
    description:
      "이 그림은 트로니(tronie)로, 17세기 네덜란드에서 초상화가 아닌 '머리'를 묘사한 작품을 일컫는 용어입니다. 이국적인 드레스를 입고 동양식 터번을 쓴 유럽 소녀가 매우 큰 진주로 여겨졌던 귀걸이를 하고 있는 모습을 묘사하고 있습니다. 2014년 네덜란드 천체물리학자 빈센트 이케는 귀걸이의 재질에 대해 의문을 제기했으며, 정반사, 배 모양, 귀걸이의 큰 크기를 근거로 진주보다는 광택이 나는 주석처럼 보인다고 주장했습니다.",
    source: "https://en.wikipedia.org/wiki/Girl_with_a_Pearl_Earring",
    artist: "Johannes Vermeer",
    style: "height: 400px",
    class: "max-w-360 max-h-302",
    images: {
      thumbnail: thumbnail5,
      small: small5,
      large: large5,
      gallery: gallery5,
      artist: artist5,
    },
  },
  {
    name: "가나가와 해변의 큰 파도",
    year: 1831,
    description:
      '<가나가와 해변의 큰 파도>(일본어: 神奈川沖浪裏, 가나가와오키 나미우라, 직역하면 "가나가와 앞바다 파도 아래")는 일본 우키요에 화가 호쿠사이의 목판화 작품으로, <큰 파도> 또는 단순히 <파도>로도 알려져 있습니다. 에도 시대 말기인 1829년과 1833년 사이에 호쿠사이의 연작 <후지산 36경>의 첫 번째 작품으로 출판되었습니다. 이 작품은 가나가와현 사가미만 해안에서 거대한 파도가 세 척의 배를 위협하는 모습을 묘사하고 있으며, 배경에는 후지산이 솟아 있습니다.',
    source: "https://en.wikipedia.org/wiki/The_Great_Wave_off_Kanagawa",
    artist: "Hokusai",
    style: "height: 280px",
    class: "max-h-302",
    images: {
      thumbnail: thumbnail6,
      small: small6,
      large: large6,
      gallery: gallery6,
      artist: artist6,
    },
  },
  {
    name: "밤의 카페",
    year: 1888,
    description:
      "<밤의 카페>(프랑스어: Le Café de nuit)는 네덜란드 화가 빈센트 반 고흐가 1888년 9월 아를에서 제작한 유화 작품입니다. 제목은 서명 아래 오른쪽 하단에 새겨져 있습니다. 이 그림은 예일 대학교 소유이며 현재 코네티컷주 뉴헤이븐의 예일 대학교 미술관에 소장되어 있습니다. 묘사된 내부는 조제프미셸 지누와 그의 아내 마리가 운영하던 라마르틴 광장 30번지의 카페 드 라 가르입니다. 마리는 1888년 11월 반 고흐와 고갱의 <아를의 여인> 모델을 섰으며, 조금 후 조제프 지누도 두 화가의 모델을 섰습니다.",
    source: "https://en.wikipedia.org/wiki/The_Night_Caf%C3%A9",
    artist: "Vincent Van Gogh",
    style: "height: 260px",
    class: "max-h-238",
    images: {
      thumbnail: thumbnail7,
      small: small7,
      large: large7,
      gallery: gallery7,
      artist: artist7,
    },
  },
  {
    name: "아르놀피니 부부의 초상",
    year: 1434,
    description:
      "이 작품은 아름다움, 복잡한 상징 체계, 기하학적 직교 투시법, 거울을 이용한 화면 공간의 확장으로 인해 서양 미술에서 가장 독창적이고 복잡한 그림 중 하나로 여겨집니다. 에른스트 곰브리치는 \"그 나름의 방식으로 도나텔로나 마사초의 이탈리아 작품만큼 새롭고 혁명적이었다. 현실 세계의 단순한 한 모서리가 마치 마법처럼 갑자기 패널에 고정되었다... 역사상 처음으로 화가가 진정한 의미에서 완벽한 목격자가 되었다\"고 말했습니다.",
    source: "https://en.wikipedia.org/wiki/Arnolfini_Portrait",
    artist: "Jan van Eyck",
    style: "height: 330px",
    class: "max-h-238",
    images: {
      thumbnail: thumbnail8,
      small: small8,
      large: large8,
      gallery: gallery8,
      artist: artist8,
    },
  },
  {
    name: "게르니카",
    year: 1937,
    description:
      "이 장면은 방 안에서 벌어지며, 왼쪽에는 눈을 크게 뜬 황소가 팔에 죽은 아이를 안고 있는 슬퍼하는 여인의 위에 서 있습니다. 방 중앙에는 말이 옆구리에 창이나 투창에 찔린 것처럼 큰 구멍이 뚫린 채 고통 속에 쓰러져 있습니다. 말은 사슬갑옷을 입은 것처럼 보이며, 세로로 배열된 집계 표시로 장식되어 있습니다. 죽고 절단된 병사가 말 아래에 누워 있습니다. 잘린 오른팔의 손은 부서진 검을 쥐고 있으며, 그 검에서 꽃이 자라고 있습니다.",
    source: "https://en.wikipedia.org/wiki/Guernica_(Picasso)",
    artist: "Pablo Picasso",
    style: "height: 285px",
    class: "max-w-360 max-h-174",
    images: {
      thumbnail: thumbnail9,
      small: small9,
      large: large9,
      gallery: gallery9,
      artist: artist9,
    },
  },
  {
    name: "반 고흐 자화상",
    year: 1889,
    description:
      '이 자화상은 10년 동안 제작된 약 32점의 자화상 중 하나이며, 화가로서의 그의 작품에서 중요한 부분을 차지했습니다. 그는 모델을 고용할 돈이 자주 없어서 자신을 그렸습니다. 그는 이 그림을 파리 근처 오베르쉬르와즈로 가져가 폴 가셰 박사에게 보여주었는데, 박사는 이 작품이 "완전히 광신적"이라고 생각했습니다. 미술사가들은 이 그림과 <수염 없는 자화상> 중 어느 것이 반 고흐의 마지막 자화상인지 의견이 분분합니다. 미술사가 잉고 F. 발터와 얀 휠스커는 이 작품이 마지막이라고 여깁니다.',
    source: "https://en.wikipedia.org/wiki/Van_Gogh_self-portrait_(1889)",
    artist: "Vincent Van Gogh",
    style: "height: 500px",
    class: "max-h-238",
    images: {
      thumbnail: thumbnail10,
      small: small10,
      large: large10,
      gallery: gallery10,
      artist: artist10,
    },
  },
  {
    name: "모나리자",
    year: 1503,
    description:
      "모나리자(이탈리아어: La Gioconda 또는 Monna Lisa)는 이탈리아 화가 레오나르도 다 빈치의 반신 초상화입니다. 이탈리아 르네상스의 전형적인 걸작으로 여겨지며, \"세계에서 가장 잘 알려지고, 가장 많이 방문되고, 가장 많이 글을 쓰여지고, 가장 많이 노래되고, 가장 많이 패러디된 예술 작품\"으로 묘사되었습니다. 이 그림의 새로운 특성에는 주인공의 수수께끼 같은 표정, 구도의 장대함, 형태의 미묘한 모델링, 대기감 있는 환상주의가 포함됩니다.",
    source: "https://en.wikipedia.org/wiki/Mona_Lisa",
    artist: "Leonardo da Vinci",
    style: "height: 525px",
    class: "max-w-310 max-h-238",
    images: {
      thumbnail: thumbnail11,
      small: small11,
      large: large11,
      gallery: gallery11,
      artist: artist11,
    },
  },
  {
    name: "회개하는 막달레나",
    year: 1625,
    description:
      "<회개하는 막달레나>는 이탈리아 화가 아르테미시아 젠틸레스키의 작품입니다. 세비야 대성당에 걸려 있습니다. 아마도 17세기 후반부터 대성당에 있었을 것입니다. 이 그림의 첫 소장처는 페르난도 엔리케스 아판 데 리베라의 컬렉션이었으며, 1626년부터 1637년까지 소장되었습니다. 화가는 1620년대 후반에 <우울한 막달레나>에서 이 주제로 다시 돌아왔습니다.",
    source:
      "https://en.wikipedia.org/wiki/Penitent_Magdalene_(Artemisia_Gentileschi)",
    artist: "Artemisia Gentileschi",
    style: "height: 250px",
    class: "max-w-396 max-h-238",
    images: {
      thumbnail: thumbnail12,
      small: small12,
      large: large12,
      gallery: gallery12,
      artist: artist12,
    },
  },
  {
    name: "잠자는 집시",
    year: 1897,
    description:
      "<잠자는 집시>(프랑스어: La Bohémienne endormie)는 프랑스 소박파 화가 앙리 루소(1844-1910)가 1897년에 제작한 유화 작품입니다. 달빛이 내리는 밤에 사자가 잠든 여인을 바라보며 생각에 잠긴 모습을 환상적으로 묘사하고 있습니다. 루소는 이 그림을 제13회 독립 미술가 협회 전시회에서 처음 전시했으며, 고향 라발의 시장에게 판매하려 했으나 실패했습니다. 대신 파리의 숯 장수의 개인 컬렉션에 들어갔으며, 1924년 미술 평론가 루이 보크셀이 발견할 때까지 그곳에 있었습니다.",
    source: "https://en.wikipedia.org/wiki/The_Sleeping_Gypsy",
    artist: "Henri Rousseau",
    style: "height: 250px",
    class: "max-w-350 max-h-302",
    images: {
      thumbnail: thumbnail13,
      small: small13,
      large: large13,
      gallery: gallery13,
      artist: artist13,
    },
  },
  {
    name: "사과 바구니",
    year: 1893,
    description:
      "<사과 바구니>(프랑스어: Le panier de pommes)는 프랑스 화가 폴 세잔이 1893년경에 제작한 정물 유화 작품입니다. 이 그림은 사실적 재현을 거부하고 대신 여러 시점을 만들기 위해 대상을 왜곡한 창의적인 구도로 특히 주목할 만합니다. 이 접근법은 결국 야수파와 입체파를 포함한 다른 예술 운동에 영향을 미쳤습니다. 시카고 미술관의 헬렌 버치 바틀렛 기념 컬렉션에 소장되어 있습니다.",
    source: "https://en.wikipedia.org/wiki/The_Basket_of_Apples",
    artist: "Paul Cézanne",
    style: "height: 430px",
    class: "max-w-450 max-h-238",
    images: {
      thumbnail: thumbnail14,
      small: small14,
      large: large14,
      gallery: gallery14,
      artist: artist14,
    },
  },
  {
    name: "그네",
    year: 1767,
    description:
      "이 그림은 그네에 앉은 우아한 젊은 여인을 묘사하고 있습니다. 왼쪽 덤불에 숨어 있는 미소 짓는 젊은 남자가 모자를 들고 팔을 뻗은 채 그녀의 펄럭이는 드레스 안을 볼 수 있는 유리한 위치에서 그녀를 지켜보고 있습니다. 오른쪽 그림자에 거의 숨어 있는 미소 짓는 나이 든 남자가 두 개의 밧줄로 그네를 밀고 있습니다. 나이 든 남자는 젊은 남자의 존재를 모르는 것 같습니다. 젊은 여인이 높이 그네를 타며 왼쪽 다리를 들어 올리자, 그녀의 우아한 구두가 공중으로 날아갑니다.",
    source: "https://en.wikipedia.org/wiki/The_Swing_(Fragonard)",
    artist: "Jean-Honoré Fragonard",
    style: "height: 340px",
    class: "max-h-174",
    images: {
      thumbnail: thumbnail15,
      small: small15,
      large: large15,
      gallery: gallery15,
      artist: artist15,
    },
  },
];
