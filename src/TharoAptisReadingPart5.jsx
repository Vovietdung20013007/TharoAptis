import React, { useState, useCallback } from "react";
import styles from "./TharoAptisReading.module.css";

const PART5_PAGES = [
  {
    topic :"MOUNTAIN (đề mới cập nhật T10/2025) - thi nhiều",
    choices: [
      '1.The wrong priorities',
      '2.A more intimate relationships',
      '3.Changing the definition of mountain',
      '4.The unique sense of achievement',
      '5.Focus on stability',
      '6.Publicity of achievement',
      '7.Worrying connections'
    ],
    suggestions: [
      '1.Thay đổi định nghĩa về ngọn núi',
      '2.Cảm giác thành tựu độc đáo',
      '3.Sự công khai thành tích',
      '4.Các ưu tiên sai lầm',
      '5.Những mối liên hệ đáng lo ngại',
      '6.Một mối quan hệ thân thiết hơn',
      '7.Tập trung vào sự ổn định'
    ],
    correctOrder: [2, 3, 5, 0, 6, 1, 4]
  },
  {
    choices: [
      '1.Difficulty Changing Old Habits',
      '2.Alternative solutions worth considering',
      '3.A way of life now out date',
      '4.Benefits for Employees',
      '5.Undesirable financial consequences',
      '6.Unforeseen Challenges for Employees',
      '7.Unfair for some people'
    ],
    suggestions: [
      '1.Một lối sống đã lỗi thời',
      '2.Lợi ích cho nhân viên',
      '3.Những hậu quả tài chính không mong muốn',
      '4.Những thách thức không lường trước được đối với nhân viên',
      '5.Khó khăn trong việc thay đổi thói quen cũ',
      '6.Không công bằng đối với một số người',
      '7.Các giải pháp thay thế đáng xem xét'
    ],
    correctOrder: [2, 3, 4, 5, 0, 6, 1]
  },
  {
    choices: [
      '1.Building inclusive digital ecosystems',
      '2.Concerns about cybersecurity risks',
      '3.Promoting digital training skills',
      '4.Redefining business models with technology',
      '5.Focusing on ethical technology development',
      '6.Over-reliance on automated systems',
      '7.Enhancing productivity through automation'
    ],
    suggestions: [
      '1.Định nghĩa lại mô hình kinh doanh bằng công nghệ',
      '2.Nâng cao năng suất thông qua tự động hóa',
      '3.Thúc đẩy kỹ năng đào tạo kỹ thuật số',
      '4.Phụ thuộc quá mức vào các hệ thống tự động',
      '5.Những lo ngại về rủi ro an ninh mạng',
      '6.Xây dựng hệ sinh thái kỹ thuật số toàn diện',
      '7.Tập trung vào phát triển công nghệ có đạo đức'
    ],
    correctOrder: [3, 6, 2, 5, 1, 0, 4]
  },
  {
    choices: [
      '1.Labels can change perspective on people',
      '2.Redefining holistic health approaches',
      '3.Promoting mental health awareness',
      '4.Attempting to create a gender balance',
      '5.Uniformity is not always beneficial',
      '6.Encouraging community fitness programs',
      '7.Overemphasis on trendy diets'
    ],
    suggestions: [
      '1.Định nghĩa lại các phương pháp tiếp cận sức khỏe toàn diện',
      '2.Thúc đẩy nhận thức về sức khỏe tinh thần',
      '3.Khuyến khích các chương trình thể dục cộng đồng',
      '4.Quá chú trọng vào các chế độ ăn kiêng theo xu hướng',
      '5.Nhãn dán có thể thay đổi góc nhìn về con người',
      '6.Nỗ lực tạo ra sự cân bằng giới',
      '7.Sự đồng nhất không phải lúc nào cũng có lợi'
    ],
    correctOrder: [1, 2, 5, 6, 0, 3, 4]
  },
  {
    choices: [
      '1.The problem with labels',
      '2.A long career of excellence',
      '3.Man unfairly credited',
      '4.Recognising a pioneer\'s influence',
      '5.Gender obscure achievements',
      '6.Attempting to create a gender balance',
      '7.The limits of one-size-fits-all equality'
    ],
    suggestions: [
      '1.Công nhận ảnh hưởng của một người tiên phong',
      '2.Thành tựu bị lu mờ bởi giới tính',
      '3.Giới hạn của sự bình đẳng "một khuôn cho tất cả"',
      '4.Một sự nghiệp xuất sắc kéo dài',
      '5.Vấn đề với các nhãn dán',
      '6.Người đàn ông được ghi công một cách không công bằng',
      '7.Nỗ lực tạo ra sự cân bằng giới'
    ],
    correctOrder: [3, 4, 6, 1, 0, 2, 5]
  },
  {
    choices: [
      '1.Overreliance on digital interfaces',
      '2.Promoting tech-driven education programs',
      '3.Concerns about technology access disparities',
      '4.Building innovative tech communities',
      '5.Enhancing productivity through smart automation',
      '6.Focusing on sustainable digital solutions',
      '7.Redefining human-technology interaction'
    ],
    suggestions: [
      '1.Nâng cao năng suất thông qua tự động hóa thông minh',
      '2.Phụ thuộc quá nhiều vào giao diện kỹ thuật số',
      '3.Định nghĩa lại tương tác giữa con người và công nghệ',
      '4.Những lo ngại về sự chênh lệch trong tiếp cận công nghệ',
      '5.Thúc đẩy các chương trình giáo dục dựa trên công nghệ',
      '6.Tập trung vào các giải pháp kỹ thuật số bền vững',
      '7.Xây dựng cộng đồng công nghệ đổi mới'
    ],
    correctOrder: [4, 0, 6, 2, 1, 5, 3]
  },
  {
    choices: [
      "Different types of tulip",
      "Trade across Europe",
      "An unexpected turn of events",
      "Coming into fashion",
      "The economy during the Golden Age",
      "Trade mechanics\t",
      "An object of trade",
    ],
    suggestions: [
      "1.Nền kinh tế trong Thời kỳ Hoàng kim",
      "2.Trở thành mốt thời thượng",
      "3.Một đối tượng của thương mại",
      "4.Các loại hoa tulip khác nhau",
      "5.Cơ chế thương mại",
      "6.Thương mại xuyên châu Âu",
      "7.Một bước ngoặt bất ngờ",
    ],
    correctOrder: [4, 3, 6, 0, 5, 1, 2],
  },
  {
    choices: [
      "Homes too big",
      "Making a small impact",
      "Live in a small scale",
      "The lasting change",
      "Advantages",
      "Motivated",
      "Sharing skills",
    ],
    suggestions: [
      "1- Sống trong một không gian nhỏ",
      "2- Có động lực",
      "3- Ưu điểm",
      "4- Nhà quá lớn",
      "5- Chia sẻ kỹ năng",
      "6- Tạo ra tác động nhỏ",
      "7- Sự thay đổi lâu dài",
    ],
    correctOrder: [2, 5, 4, 0, 6, 1, 3],
  },
  {
    choices: [
      "A different set of values",
      "A modern day alternative",
      "Symbol of privilege and wealth",
      "Away from enclosure towards greater freedom",
      "Opening the door for everyone",
      "Away from amusement towards instruction",
      "A new mission of conversation"
    ],
    suggestions: [
      "1. Biểu tượng của đặc quyền và sự giàu có",
      "2. Mở cửa cho tất cả mọi người",
      "3. Tránh xa sự giải trí để hướng tới sự hướng dẫn",
      "4. Tránh xa sự bao vây để hướng tới sự tự do hơn",
      "5. Một tập hợp các giá trị khác",
      "6. Một sứ mệnh mới của cuộc trò chuyện",
      "7. Một sự thay thế hiện đại"
    ],
    correctOrder: [2, 4, 5, 3, 0, 6, 1]
  },
  {
    choices: [
      "The ancient origin of coffee",
      "Health risks versus health benefits debate",
      "Problems of coffee economy",
      "A habit that has become a big economy",
      "The custom of coffee drinking begins to spread",
      "A remedy of unjust revenue distribution",
      "Coffee encourages"
    ],
    suggestions: [
      "1. Thói quen uống cà phê bắt đầu lan rộng",
      "2. Cà phê khuyến khích",
      "3. Một thói quen đã trở thành nền kinh tế lớn",
      "4. Các vấn đề của nền kinh tế cà phê",
      "5. Một biện pháp khắc phục tình trạng phân phối doanh thu không công bằng",
      "6. Tranh luận về rủi ro sức khỏe so với lợi ích sức khỏe",
      "7. Nguồn gốc cổ xưa của cà phê"
    ],
    correctOrder: [4, 6, 3, 2, 5, 1, 0]
  },
  {
    choices: [
      "The reason of secrecy",
      "A temporary experiment",
      "Making things last longer",
      "Still relevant to our times",
      "Reason to reach a compromise",
      "Important lessons for all of us",
      "The difficulty of being generous"
    ],
    suggestions: [
      "1. Làm cho mọi thứ kéo dài lâu hơn",
      "2. Một thử nghiệm tạm thời",
      "3. Lý do của sự bí mật",
      "4. Vẫn còn phù hợp với thời đại của chúng ta",
      "5. Khó khăn khi hào phóng",
      "6. Lý do để đạt được sự thỏa hiệp",
      "7. Những bài học quan trọng cho tất cả chúng ta"
    ],
    correctOrder: [2, 1, 0, 3, 6, 4, 5]
  },
  {
    choices: [
      "A Journey made by stages",
      "Technology helps uncover the ocean's secret",
      "A new evidence that leads to speculation",
      "Natural barrier to resettlement",
      "Lack of knowledge and skills",
      "Determination of the explorers through the ages",
      "An alternative history of settlement"
    ],
    suggestions: [
      "1. Một lịch sử định cư thay thế",
      "2. Rào cản tự nhiên đối với việc tái định cư",
      "3. Công nghệ giúp khám phá bí mật của đại dương",
      "4. Hành trình theo từng chặng",
      "5. Bằng chứng mới dẫn đến suy đoán",
      "6. Thiếu kiến ​​thức và kỹ năng",
      "7. Quyết tâm của các nhà thám hiểm qua các thời đại"
    ],
    correctOrder: [6, 3, 1, 0, 2, 4, 5]
  },
  {
    choices: [
      "Keeping the readers guessing",
      "Dickens for our time",
      "Difficulties for modern readers",
      "Dickens's early success",
      "Bring the books to life",
      "Trying to protect his property",
      "The influence of media"
    ],
    suggestions: [
      "1. Dickens cho thời đại chúng ta",
      "2. Những khó khăn đối với độc giả hiện đại",
      "3. Giữ cho độc giả đoán già đoán non",
      "4. Ảnh hưởng của phương tiện truyền thông",
      "5. Thành công ban đầu của Dickens",
      "6. Cố gắng bảo vệ tài sản của mình",
      "7. Thổi hồn vào những cuốn sách"
    ],
    correctOrder: [1, 2, 0, 6, 3, 5, 4]
  },
  {
    choices: [
      "Effects of a changing diet",
      "Cooking methods",
      "The influence of philosophy",
      "The origins of chinese food",
      "The style of eating",
      "Regional variations",
      "Changes in the Chinese diets"
    ],
    suggestions: [
      "1. Nguồn gốc của ẩm thực Trung Hoa",
      "2. Ảnh hưởng của triết học",
      "3. Biến thể theo vùng",
      "4. Phương pháp nấu ăn",
      "5. Phong cách ăn uống",
      "6. Thay đổi trong chế độ ăn uống của người Trung Hoa",
      "7. Tác động của chế độ ăn uống thay đổi"
    ],
    correctOrder: [3, 2, 5, 1, 4, 6, 0]
  },
  {
    choices: [
      "The success of a simple idea",
      "Factors contributing to inactivity",
      "A design for exercise and for study",
      "Achieving the right balance",
      "Ways in which environment can influence behavior",
      "The wider effects of regular activity",
      "The situation have the potential of being worst"
    ],
    suggestions: [
      "1. Các yếu tố góp phần gây ra tình trạng không hoạt động",
      "2. Tình hình có khả năng trở nên tồi tệ hơn",
      "3. Sự thành công của một ý tưởng đơn giản",
      "4. Những tác động rộng hơn của hoạt động thường xuyên",
      "5. Những cách mà môi trường có thể ảnh hưởng đến hành vi",
      "6. Thiết kế cho bài tập và học tập",
      "7. Đạt được sự cân bằng phù hợp"
    ],
    correctOrder: [1, 6, 0, 5, 4, 2, 3]
  },
  {
    choices: [
      "Hidden geography",
      "Why is it so cold?",
      "First step on the ice",
      "Race to the Pole",
      "Less effort needed",
      "Who is in charge?",
      "Where is the end of the Earth?"
    ],
    suggestions: [
      "1. Ai là người chịu trách nhiệm?",
      "2. Bước chân đầu tiên trên băng",
      "3. Điểm tận cùng của Trái Đất là ở đâu?",
      "4. Địa lý ẩn giấu",
      "5. Cuộc đua đến Cực",
      "6. Cần ít nỗ lực hơn",
      "7. Tại sao lại lạnh như vậy?"
    ],
    correctOrder: [5, 2, 6, 0, 3, 4, 1]
  },
  {
    choices: [
      "Earning a reputation",
      "The easiest way to travel",
      "A need for change",
      "Generations of champions",
      "Result of a lucky escape",
      "Origins of what the winner receives",
      "Not in it for the money"
    ],
    suggestions: [
      "1. Cách dễ nhất để đi du lịch",
      "2. Kết quả của một cuộc trốn thoát may mắn",
      "3. Nguồn gốc của những gì người chiến thắng nhận được",
      "4. Cần thay đổi",
      "5. Kiếm được danh tiếng",
      "6. Nhiều thế hệ nhà vô địch",
      "7. Không vì tiền"
    ],
    correctOrder: [1, 4, 5, 2, 0, 3, 6]
  },
  {
    choices: [
      "Respect the life",
      "Types of vegetarian",
      "Possible to happen",
      "Health gets better with diet",
      "Farming Factory -  it is a harmful thing",
      "Various explanations",
      "Our responsibilities with global"
    ],
    suggestions: [
      "1. Các loại ăn chay",
      "2. Nhiều giải thích khác nhau",
      "3. Có thể xảy ra",
      "4. Nhà máy nông nghiệp - đó là một điều có hại",
      "5. Tôn trọng sự sống",
      "6. Sức khỏe được cải thiện nhờ chế độ ăn uống",
      "7. Trách nhiệm của chúng ta với toàn cầu"
    ],
    correctOrder: [1, 5, 2, 4, 0, 3, 6]
  },
  {
    choices: [
      "A way to learn discipline and the importance of routine",
      "A physically demanding activity",
      "Develop a greater sense of well-being",
      "Enhanced sensitivity to other people's feelings",
      "A great opportunity to broaden your social circle",
      "A creative outlet for expressing emotions",
      "A good way to boost your memory"
    ],
    suggestions: [
      "1. Một hoạt động đòi hỏi thể lực",
      "2. Một cách tốt để tăng cường trí nhớ",
      "3. Một cơ hội tuyệt vời để mở rộng vòng tròn xã hội của bạn",
      "4. Một cách để học tính kỷ luật và tầm quan trọng của thói quen",
      "5. Một lối thoát sáng tạo để thể hiện cảm xúc",
      "6. Tăng cường sự nhạy cảm với cảm xúc của người khác",
      "7. Phát triển cảm giác khỏe mạnh hơn"
    ],
    correctOrder: [1, 6, 4, 0, 5, 3, 2]
  },{
  choices: [
    "The importance of planning in advance",
    "A competitive business",
    "The advantages of having your own space",
    "The price of convenience may be high",
    "Sensible financial choice",
    "The impact of lack of freedom",
    "The benefits of living with less"
  ],
  suggestions: [
    "1. Một lựa chọn tài chính hợp lý",
    "2. Cái giá của sự tiện lợi có thể cao",
    "3. Tầm quan trọng của việc lập kế hoạch trước",
    "4. Tác động của việc thiếu tự do",
    "5. Lợi ích của việc sống với ít hơn",
    "6. Lợi thế của việc có không gian riêng",
    "7. Một doanh nghiệp cạnh tranh"
  ],
  correctOrder: [4, 3, 0, 5, 6, 2, 1]
}

];

function HeadingChoice({ text, index, isDropped, onClick }) {
  return (
    <div
      className={styles.choice}
      style={{
        background: isDropped ? "#e0e0e0" : "#fff",
        cursor: isDropped ? "not-allowed" : "pointer",
        opacity: isDropped ? 0.6 : 1,
      }}
      onClick={() => !isDropped && onClick(index)}
    >
      {text}
    </div>
  );
}

function DroppableSlot({ value, onRemove, index, isCorrect, isFilled, headings }) {
  let borderColor = "#bbb";
  let background = isFilled ? "#f0f7ff" : "#f5f5f5";
  if (isFilled) {
    borderColor = isCorrect ? "#2ecc40" : "#ff4136";
    background = isCorrect ? "#eaffea" : "#ffeaea";
  }
  return (
    <div
      className={styles["droppable-slot"]}
      style={{
        borderColor,
        background,
        minWidth: 220,
      }}
      onDoubleClick={() => value !== null && onRemove(index)}
      title={value !== null ? "Double click to remove" : ""}
    >
      {value !== null ? headings[value] : ""}
    </div>
  );
}

const TharoAptisReadingPart5 = () => {
  const [page, setPage] = useState(0);
  const [slotValues, setSlotValues] = useState(Array(7).fill(null));
  const [showSuggestions, setShowSuggestions] = useState(false);
  const { topic ,choices, suggestions, correctOrder } = PART5_PAGES[page];
  const used = slotValues.filter((v) => v !== null);
  const availableHeadings = choices.map((c, i) => ({
    text: c,
    index: i,
    isDropped: used.includes(i),
  }));

  const handleChoiceClick = useCallback((choiceIndex) => {
    setSlotValues((prev) => {
      const newArr = [...prev];
      // Tìm vị trí trống đầu tiên
      const emptySlotIndex = newArr.findIndex(val => val === null);
      if (emptySlotIndex !== -1) {
        newArr[emptySlotIndex] = choiceIndex;
      }
      return newArr;
    });
  }, []);

  const handleRemove = useCallback((slotIndex) => {
    setSlotValues((prev) => {
      const newArr = [...prev];
      newArr[slotIndex] = null;
      return newArr;
    });
  }, []);

  // Reset slotValues khi đổi trang
  React.useEffect(() => {
    setSlotValues(Array(7).fill(null));
    setShowSuggestions(false);
  }, [page]);

  return (
    <div style={{ maxWidth: 700, margin: "40px auto", background: "#fff", borderRadius: 25, boxShadow: "0 2px 12px rgba(0,0,0,0.07)", padding: 24 }}>
      <div className={styles.pagination}>
        <button
          className={styles['pagination-btn']}
          onClick={() => setPage(p => Math.max(0, p - 1))}
          disabled={page === 0}
        >&lt;</button>
        <span className={styles['pagination-label']}>Page {page + 1} / {PART5_PAGES.length}</span>
        <button
          className={styles['pagination-btn']}
          onClick={() => setPage(p => Math.min(PART5_PAGES.length - 1, p + 1))}
          disabled={page === PART5_PAGES.length - 1}
        >&gt;</button>
      </div>
      <div><span className="topic-color">{topic}</span>

      </div>
      <button
        onClick={() => setShowSuggestions(s => !s)}
        style={{
          marginBottom: 18,
          padding: '8px 18px',
          fontWeight: 600,
          fontSize: 16,
          background: '#2d3a4a',
          color: '#fff',
          border: 'none',
          borderRadius: 6,
          cursor: 'pointer',
          boxShadow: '0 1px 4px rgba(0,0,0,0.07)',
          transition: 'background 0.2s',
        }}
      >
        Gợi ý
      </button>
      {showSuggestions && (
        <div style={{
          background: '#f5f5f5',
          border: '1px solid #bbb',
          borderRadius: 6,
          padding: 16,
          marginBottom: 18,
          fontSize: 16,
          color: '#2d3a4a',
          lineHeight: 1.7,
        }}>
          {suggestions.map((s, idx) => (
            <div key={idx} style={{ marginBottom: 4 }}>{s}</div>
          ))}
        </div>
      )}
      <div style={{ display: 'flex', gap: 32 }}>
        <div style={{ flex: 1 }}>
          {[0,1,2,3,4,5,6].map(idx => (
            <div key={idx} style={{ display: 'flex', alignItems: 'center', marginBottom: 12 }}>
              <span style={{ width: 18, fontWeight: 600 }}>{idx}.</span>
              <DroppableSlot
                value={slotValues[idx]}
                index={idx}
                onRemove={handleRemove}
                isFilled={slotValues[idx] !== null}
                isCorrect={slotValues[idx] !== null && slotValues[idx] === correctOrder[idx]}
                headings={choices}
              />
            </div>
          ))}
        </div>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 14 }}>
          {availableHeadings.map(({ text, index, isDropped }) =>
            !isDropped ? (
              <HeadingChoice key={index} text={text} index={index} isDropped={isDropped} onClick={handleChoiceClick} />
            ) : null
          )}
        </div>
      </div>
    </div>
  );
};

export default TharoAptisReadingPart5; 