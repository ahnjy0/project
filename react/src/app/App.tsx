import {
  FlaskConical,
  BookOpen,
  MessageSquare,
  BookMarked,
  GraduationCap,
  Star,
  Users,
  Heart,
} from "lucide-react";

const CARD_BG = "#F8FAFC";
const CARD_BORDER = "#CAD5E2";

const SESSIONS = [
  {
    id: 1,
    label: "1차시",
    field: "과학 읽기",
    fieldIcon: <FlaskConical size={15} />,
    bookLabel: "도서명",
    book: "비커 군과 방과 후 과학실",
    descLabel: "책 소개",
    desc: "사랑스러운 비커 군과 실험 도구 친구들이 방과 후 과학실에서 펼치는 유쾌한 모험! 다양한 실험 기구들의 특징과 과학적 원리를 이야기 속에서 자연스럽게 익히며, 과학에 대한 흥미와 탐구심을 길러줍니다.",
    goals: [
      "읽기 연습을 통해 읽기 유창성을 기르고, 읽기 방법을 익히기",
      "실험 기구의 이름과 쓰임새를 이해하고 정리하기",
      "독서 감상문 쓰기",
    ],
    subject:
      "과학 3-1 2단원. 물질의 성질 | 과학 4-1 4단원. 혼합물의 분리",
    accentColor: "#155DFC",
    accentLightHex: "#EBF1FF",
    emoji: "🔬",
    coverImage:
      "https://cdn.hanuribook.com/img/hanuribook/sample_book_01.jpg",
  },
  {
    id: 2,
    label: "2차시",
    field: "비문학 독서",
    fieldIcon: <BookOpen size={15} />,
    bookLabel: "도서명",
    book: "명절은 어떤 날일까요?",
    descLabel: "책 소개",
    desc: "설날, 추석, 단오 등 우리나라 대표 명절의 유래와 풍습을 알기 쉽게 설명합니다. 명절마다 먹는 음식, 하는 놀이, 입는 옷 등을 통해 전통문화의 소중함과 가족 간의 따뜻한 정을 함께 배울 수 있어요.",
    goals: [
      "명절의 의미와 종류를 이해하고 정리하기",
      "명절 음식과 풍습을 비교·분류하기",
      "우리 전통문화의 소중함을 느끼고 표현하기",
    ],
    subject:
      "사회 3-2 2단원. 우리가 알아보는 지역의 역사 | 도덕 4학년 4단원. 공감과 배려",
    accentColor: "#009966",
    accentLightHex: "#E6F5F0",
    emoji: "🏮",
    coverImage:
      "https://cdn.hanuribook.com/img/hanuribook/sample_book_02.jpg",
  },
  {
    id: 3,
    label: "3차시",
    field: "토의 · 토론",
    fieldIcon: <MessageSquare size={15} />,
    bookLabel: "주제",
    book: "친구와 화해하기_토의",
    descLabel: "주제 선정 이유",
    desc: "친구와의 갈등은 누구나 경험하는 일입니다. 화해하는 방법을 함께 생각해봄으로써 공감 능력과 의사소통 능력을 키우고, 갈등을 평화롭게 해결하는 방법을 직접 연습해 봅니다.",
    goals: [
      "갈등 상황을 이해하고 상대방의 감정을 공감하기",
      "화해를 위한 다양한 방법을 토의하고 정리하기",
      "올바른 사과와 화해의 방법을 실천하기",
    ],
    subject:
      "도덕 4학년 2단원. 최선을 다하는 삶 | 국어 3-1 6단원. 의견이 있어요",
    accentColor: "#F54900",
    accentLightHex: "#FFF0EA",
    emoji: "🤝",
    coverImage:
      "https://cdn.hanuribook.com/img/hanuribook/sample_book_03.jpg",
  },
  {
    id: 4,
    label: "4차시",
    field: "문학 독서",
    fieldIcon: <BookMarked size={15} />,
    bookLabel: "도서명",
    book: "철 수세미와 안수타이",
    descLabel: "책 소개",
    desc: "낡고 닳아빠진 철 수세미와 새로 온 안수타이의 특별한 우정 이야기. 서로 다른 모습과 성격을 가진 두 주인공을 통해 다양성의 가치와 진정한 우정의 의미를 감동적으로 그려냅니다.",
    goals: [
      "이야기의 흐름을 파악하고 인물의 감정 변화를 이해하기",
      "등장인물의 성격을 분석하고 자신의 경험과 연결하기",
      "독서 감상문 및 창의적 글쓰기",
    ],
    subject:
      "국어 4-1 5단원. 내가 만든 이야기 | 도덕 3학년 1단원. 나와 너, 우리 함께",
    accentColor: "#4F39F6",
    accentLightHex: "#EEEDFE",
    emoji: "📖",
    coverImage:
      "https://cdn.hanuribook.com/img/hanuribook/sample_book_04.jpg",
  },
];

function SessionCard({
  session,
}: {
  session: (typeof SESSIONS)[0];
}) {
  const ac = session.accentColor;
  const al = session.accentLightHex;

  return (
    <div
      className="rounded-2xl overflow-hidden mb-6 print:mb-5 print:rounded-xl"
      style={{
        background: CARD_BG,
        border: `1px solid ${CARD_BORDER}`,
      }}
    >
      {/* 헤더 */}
      <div
        className="px-5 py-3 flex items-center border-b"
        style={{
          background: CARD_BG,
          borderColor: CARD_BORDER,
        }}
      >
        <span
          className="inline-flex items-center justify-center w-9 h-9 rounded-lg text-white text-lg font-extrabold shadow-sm shrink-0"
          style={{ background: ac }}
        >
          {session.id}
        </span>
        <h2 className="ml-3 text-gray-900 text-lg font-bold leading-tight">
          {session.field}
        </h2>
      </div>

      {/* 본문 */}
      <div className="bg-white px-4 pt-4 pb-3">
        {/* 도서명 행 — 표지 이미지 포함 */}
        <div className="flex items-stretch gap-4 mb-3">
          {/* 책 표지 */}
          <div
            className="shrink-0 w-[72px] print:w-[64px] rounded-lg overflow-hidden"
            style={{
              border: `1px solid ${CARD_BORDER}`,
              minHeight: 96,
            }}
          >
            <img
              src={session.coverImage}
              alt={`${session.book} 표지`}
              className="w-full h-full object-cover"
              style={{ minHeight: 96, maxHeight: 110 }}
            />
          </div>

          {/* 도서명 + 소개 */}
          <div className="flex-1 flex flex-col justify-center gap-2">
            <div className="flex items-start gap-2">
              <span
                className="inline-flex items-center text-[11px] font-bold px-2 py-0.5 rounded-full shrink-0 mt-0.5"
                style={{ background: al, color: ac }}
              >
                {session.bookLabel}
              </span>
              <span className="font-bold text-gray-900 text-sm leading-snug">
                {session.book}
              </span>
            </div>
            <div>
              <span
                className="inline-flex items-center text-[11px] font-bold px-2 py-0.5 rounded-full mb-1"
                style={{ background: al, color: ac }}
              >
                {session.descLabel}
              </span>
              <p className="text-gray-600 text-xs leading-relaxed">
                {session.desc}
              </p>
            </div>
          </div>
        </div>

        {/* 활동 목표 + 교과 연계 좌우 배치 */}
        <div className="flex gap-[10px]">
          {/* 활동 목표 */}
          <div
            className="flex-1 rounded-xl p-[10px]"
            style={{
              background: al,
              border: `1px solid ${CARD_BORDER}`,
            }}
          >
            <div
              className="inline-flex items-center justify-center px-3 py-1 rounded-md mb-2.5"
              style={{ background: ac, width: 80 }}
            >
              <span className="text-xs font-bold text-white">
                활동 목표
              </span>
            </div>
            <ul className="space-y-1.5">
              {session.goals.map((g, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-xs text-gray-700"
                >
                  <span
                    className="inline-flex items-center justify-center w-4 h-4 rounded-full text-white text-[10px] font-bold shrink-0 mt-0.5"
                    style={{ background: ac }}
                  >
                    {i + 1}
                  </span>
                  {g}
                </li>
              ))}
            </ul>
          </div>

          {/* 교과 연계 */}
          <div
            className="w-[30%] shrink-0 rounded-xl p-[10px] flex flex-col gap-2"
            style={{
              background: "#F5F5F5",
              border: `1px solid ${CARD_BORDER}`,
            }}
          >
            <div
              className="flex items-center justify-center py-1 rounded-md mb-2.5"
              style={{ background: "#314158", width: 80 }}
            >
              <span className="text-xs font-bold text-white">
                교과 연계
              </span>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed">
              {session.subject}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function PageHeader({ subtitle }: { subtitle: string }) {
  return (
    <div className="mb-6 print:mb-5">
      <div
        className="flex items-center justify-between pb-4"
        style={{ borderBottom: `2px solid ${CARD_BORDER}` }}
      >
        <div className="flex items-center gap-3">
          <div
            className="flex items-center justify-center w-10 h-10 rounded-xl shadow"
            style={{
              background:
                "linear-gradient(135deg, #155DFC, #4F39F6)",
            }}
          >
            <GraduationCap size={22} className="text-white" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 leading-tight">
            과학탐탐
          </h1>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm font-bold text-gray-700">
            2026년 2월 수업계획안
          </span>
          <div
            className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full"
            style={{ background: "#EBF1FF" }}
          >
            <Star size={10} style={{ color: "#155DFC" }} />
            <span
              className="text-[10px] font-semibold"
              style={{ color: "#155DFC" }}
            >
              {subtitle}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div
      className="min-h-screen py-8 px-4 print:p-0 print:bg-white"
      style={{
        fontFamily:
          "'Pretendard', 'Apple SD Gothic Neo', sans-serif",
        background:
          "linear-gradient(135deg, #f0f4ff 0%, #f8fafc 50%, #f0f0fe 100%)",
      }}
    >
      {/* 페이지 1 */}
      <div className="max-w-[210mm] mx-auto bg-white shadow-xl print:shadow-none rounded-2xl print:rounded-none mb-6 print:mb-0 overflow-hidden">
        <div className="p-8 print:p-10 min-h-[297mm] print:min-h-[297mm] page-break">
          <PageHeader subtitle="1차시 · 2차시" />
          <SessionCard session={SESSIONS[0]} />
          <SessionCard session={SESSIONS[1]} />
          <div className="flex items-center justify-center gap-2 pt-3 print:hidden">
            <Heart size={11} className="text-pink-200" />
            <span className="text-xs text-gray-300">
              한우리 수업계획안 · 2026년 2월
            </span>
            <Heart size={11} className="text-pink-200" />
          </div>
          <div className="hidden print:flex items-center justify-center pt-3">
            <span className="text-[10px] text-gray-300">
              한우리 수업계획안 · 2026년 2월 · 1 / 2
            </span>
          </div>
        </div>
      </div>

      {/* 페이지 2 */}
      <div className="max-w-[210mm] mx-auto bg-white shadow-xl print:shadow-none rounded-2xl print:rounded-none overflow-hidden">
        <div className="p-8 print:p-10 min-h-[297mm] print:min-h-[297mm]">
          <PageHeader subtitle="3차시 · 4차시" />
          <SessionCard session={SESSIONS[2]} />
          <SessionCard session={SESSIONS[3]} />
          <div className="flex items-center justify-center gap-2 pt-3 print:hidden">
            <Users size={11} className="text-blue-200" />
            <span className="text-xs text-gray-300">
              한우리 수업계획안 · 2026년 2월
            </span>
            <Users size={11} className="text-blue-200" />
          </div>
          <div className="hidden print:flex items-center justify-center pt-3">
            <span className="text-[10px] text-gray-300">
              한우리 수업계획안 · 2026년 2월 · 2 / 2
            </span>
          </div>
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @media print {
          @page { size: A4; margin: 0; }
          body { margin: 0; padding: 0; background: white !important; }
          .page-break { page-break-after: always; }
        }
      `,
        }}
      />
    </div>
  );
}