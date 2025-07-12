import React, { useState } from "react";
import './TharoAptisPart4.css';

const DATA = [
  {
    topic: "A New Restaurant",
    en: "Who <b>was impressed</b> by the range of appetizers?",
    vi: "Ai ấn tượng với nhiều món khai vị?",
    answer: "A",
  },
  {
    topic: "A New Restaurant",
    en: "Who <b>didn't eat</b> anything at the restaurant?",
    vi: "Ai không ăn bất cứ thứ gì tại nhà hàng",   
    answer: "B",
  },
  {
    topic: "A New Restaurant",
    en: "Who enjoyed <b>the atmosphere</b> of the restaurant?",
    vi: "Ai thích không khí của nhà hàng?",
    answer: "B",
  },
  {
    topic: "A New Restaurant",
    en: "Who thought his experience was <b>probably unusual?</b>",
    vi: "Ai nghĩ rằng trải nghiệm của mình có lẽ là khác thường",
    answer: "C",
  },
  {
    topic: "A New Restaurant",
    en: "Who thought the food was of <b>average quality?</b>",
    vi: "Ai nghĩ rằng đồ ăn có chất lượng trung bình",
    answer: "C",
  },
  {
    topic: "A New Restaurant",
    en: "Who thought the <b>music was too quiet?</b>",
    vi: "Ai nghĩ rằng nhạc quá nhỏ",
    answer: "A",
  },
  {
    topic: "A New Restaurant",
    en: "Who will definitely not return / not come back to the restaurant again?",
    vi: "Ai nghĩ rằng dịch vụ rất nhanh?",
    answer: "D",
  },
  // Nhóm câu hỏi mới cho Holidays
  {
    topic: "Holidays",
    en: "Who likes seeing <b>tourist attractions?</b>",
    vi: "Ai thích tham quan các điểm du lịch?",
    answer: "A",
  },
  {
    topic: "Holidays",
    en: "Who prefers to <b>stay at home</b> b on holidays?",
    vi: "Ai thích ở nhà vào kỳ nghỉ?",
    answer: "D",
  },
  {
    topic: "Holidays",
    en: "Who finds going to the beach <b>boring?</b>",
    vi: "Ai thấy đi biển là nhàm chán?",
    answer: "A",
  },
  {
    topic: "Holidays",
    en: "Who likes <b>going walking?</b>",
    vi: "Ai thích đi bộ?",
    answer: "D",
  },
  {
    topic: "Holidays",
    en: "Whose holiday requires <b>good weather?</b>",
    vi: "Kỳ nghỉ của ai đòi hỏi thời tiết tốt?",
    answer: "B",
  },
  {
    topic: "Holidays",
    en: "Who has <b>never been abroad?</b>",
    vi: "Ai chưa từng ra nước ngoài?",
    answer: "C",
  },
  {
    topic: "Holidays",
    en: "Who wants to go on a <b>mountaineering trip?</b>",
    vi: "Ai muốn đi leo núi?",
    answer: "B",
  },
  //câu 3 
  {
    topic: "Opinion on flying",
    en: "Who <b>visits relatives</b> regularly?",
    vi: "Ai thường xuyên đến thăm người thân?",
    answer: "B",
  },
  {
    topic: "Opinion on flying",
    en: "Who tries to protect the <b>environment?</b>",
    vi: "Ai cố gắng bảo vệ môi trường?",
    answer: "B",
  },
  {
    topic: "Opinion on flying",
    en: "Who likes <b>relaxing</b> while traveling?",
    vi: "Ai thích thư giãn khi đi du lịch?",
    answer: "C",
  },
  {
    topic: "Opinion on flying",
    en: "Who <b>needs to fly</b> for their work?",
    vi: "Ai cần phải bay vì công việc?",
    answer: "D",
  },
  {
    topic: "Opinion on flying",
    en: "Who suggests making flights more <b>expensive</b> / increasing the flight ticket <b>price?</b>",
    vi: "Ai đề xuất tăng giá vé máy bay / tăng giá vé máy bay?",
    answer: "A",
  },
  {
    topic: "Opinion on flying",
    en: "Who finds <b>flying tiring</b> / Who thinks that <b>flying is a bad experience?</b>",
    vi: "Ai thấy bay mệt mỏi / Ai nghĩ rằng bay là trải nghiệm tồi tệ?",
    answer: "D",
  },
  {
    topic: "Opinion on flying",
    en: "Who wants to work in <b>other countries?</b>",
    vi: "Ai muốn làm việc ở các quốc gia khác?",
    answer: "A",
  },
  //câu 4
  {
    topic: "Travelling",
    en: "Who thought the <b>public transport system</b> was good?",
    vi: "Ai nghĩ hệ thống giao thông công cộng tốt?",
    answer: "A",
  },
  {
    topic: "Travelling",
    en: "Who likes <b>the natural resort</b> here?",
    vi: "Ai thích khu nghỉ dưỡng thiên nhiên ở đây?",
    answer: "B",
  },
  {
    topic: "Travelling",
    en: "Who <b>paid a lot for their meal?</b>",
    vi: "Ai trả nhiều tiền cho bữa ăn của họ?",
    answer: "D",
  },
  {
    topic: "Travelling",
    en: "Who likes the <b>street of the theater</b> that the city puts on?",
    vi: "Ai thích con phố của nhà hát mà thành phố dựng lên?",
    answer: "C",
  },
  {
    topic: "Travelling",
    en: "Who usually enjoys <b>spending</b> a lot of money on shopping / <b>buying</b> things when travelling?",
    vi: "Ai thường thích tiêu rất nhiều tiền và mua sắm khi đi du lịch?",
    answer: "C,D", // nếu không chắc, có thể để dạng C hoặc D
  },
  {
    topic: "Travelling",
    en: "Who was concerned about <b>too much walking</b> causing a problem?",
    vi: "Ai lo lắng về việc đi bộ quá nhiều sẽ gây ra vấn đề?",
    answer: "A",
  },
  {
    topic: "Travelling",
    en: "Who <b>visited one part of the city?</b>",
    vi: "Ai đã đến thăm một khu vực nào đó của thành phố?",
    answer: "B",
  },
  //câu 5
  {
    topic: "Volunteering to clean a local park",
    en: "Who can't help clean the park because of their busy work?",
    vi: "Ai không thể giúp dọn dẹp công viên vì công việc bận rộn của họ?",
    answer: "B",
  },
  {
    topic: "Volunteering to clean a local park",
    en: "Who thinks the park is a beautiful place to relax?",
    vi: "Ai nghĩ công viên là nơi tuyệt đẹp để thư giãn?",
    answer: "A",
  },
  {
    topic: "Volunteering to clean a local park",
    en: "Who will ask for others to help?",
    vi: "Ai sẽ nhờ người khác giúp đỡ?",
    answer: "A",
  },
  {
    topic: "Volunteering to clean a local park",
    en: "Who thinks volunteering is important for students?",
    vi: "Ai nghĩ hoạt động tình nguyện là quan trọng đối với học sinh?",
    answer: "D",
  },
  {
    topic: "Volunteering to clean a local park",
    en: "Who thinks other local areas need cleaning?",
    vi: "Ai nghĩ các khu vực địa phương khác cần được dọn dẹp?",
    answer: "C",
  },
  {
    topic: "Volunteering to clean a local park",
    en: "Who thinks the cleaning needs to be done regularly / should happen regularly?",
    vi: "Ai nghĩ hoạt động dọn dẹp cần được thực hiện thường xuyên / nên được thực hiện thường xuyên?",
    answer: "C",
  },
  {
    topic: "Volunteering to clean a local park",
    en: "Who thinks volunteering will help with future employment?",
    vi: "Ai nghĩ hoạt động tình nguyện sẽ giúp ích cho việc làm trong tương lai?",
    answer: "B",
  },
  //câu 6
  {
    topic: "Sports",
    en: "Who thinks working out with friends is a good idea?",
    vi: "Ai nghĩ rằng tập thể dục với bạn bè là một ý tưởng hay?",
    answer: "A",
  },
  {
    topic: "Sports",
    en: "Who thinks eating a proper meal is important?",
    vi: "Ai nghĩ rằng ăn một bữa ăn đúng cách là quan trọng?",
    answer: "A",
  },
  {
    topic: "Sports",
    en: "Who thinks a routine can help us do more sport?",
    vi: "Ai nghĩ rằng một thói quen có thể giúp chúng ta chơi thể thao nhiều hơn?",
    answer: "B",
  },
  {
    topic: "Sports",
    en: "Who thinks exercise is for both young and the elderly?",
    vi: "Ai nghĩ rằng tập thể dục dành cho cả người trẻ và người già?",
    answer: "C",
  },
  {
    topic: "Sports",
    en: "Who thinks competitions are not useful for everybody?",
    vi: "Ai nghĩ rằng các cuộc thi không hữu ích cho tất cả mọi người?",
    answer: "C",
  },
  {
    topic: "Sports",
    en: "Who thinks experiencing pain is not necessary?",
    vi: "Ai nghĩ rằng trải qua nỗi đau là không cần thiết?",
    answer: "D",
  },
  {
    topic: "Sports",
    en: "Who thinks at times we seek expert advice?",
    vi: "Ai nghĩ rằng đôi khi chúng ta tìm kiếm lời khuyên của chuyên gia?",
    answer: "D",
  },
  //câu 7
  {
    topic: "Opinion of watching television",
    en: "Who often watches TV instead of studying?",
    vi: "Ai thường xem TV thay vì học?",
    answer: "A",
  },
  {
    topic: "Opinion of watching television",
    en: "Who avoids watching reality TV programs?",
    vi: "Ai tránh xem các chương trình truyền hình thực tế?",
    answer: "B",
  },
  {
    topic: "Opinion of watching television",
    en: "Who isn’t a very selective viewer?",
    vi: "Ai không phải là người xem rất kén chọn?",
    answer: "D",
  },
  {
    topic: "Opinion of watching television",
    en: "Who lost interest in watching football on TV?",
    vi: "Ai mất hứng thú xem bóng đá trên TV?",
    answer: "B",
  },
  {
    topic: "Opinion of watching television",
    en: "Who often keeps up to date on cinema and music?",
    vi: "Ai thường cập nhật tin tức về điện ảnh và âm nhạc?",
    answer: "D",
  },
  {
    topic: "Opinion of watching television",
    en: "Who likes TV programs which continue for several weeks?",
    vi: "Ai thích các chương trình truyền hình kéo dài trong nhiều tuần?",
    answer: "A",
  },
  {
    topic: "Opinion of watching television",
    en: "Who gets a lot of knowledge by watching TV?",
    vi: "Ai có được nhiều kiến thức bằng cách xem TV?",
    answer: "C",
  },
  // câu 8
  {
    topic: "Reading book",
    en: "Who thinks that factual books are boring?",
    vi: "Ai nghĩ rằng sách thực tế là nhàm chán?",
    answer: "D",
  },
  {
    topic: "Reading book",
    en: "Who is having difficulty in finishing a book?",
    vi: "Ai đang gặp khó khăn trong việc hoàn thành một cuốn sách?",
    answer: "C",
  },
  {
    topic: "Reading book",
    en: "Who plans their reading schedule?",
    vi: "Ai lập kế hoạch cho lịch trình đọc sách của mình?",
    answer: "A",
  },
  {
    topic: "Reading book",
    en: "Who reads many books at once?",
    vi: "Ai đọc nhiều sách cùng một lúc?",
    answer: "B",
  },
  {
    topic: "Reading book",
    en: "Who wants to read a lot of books?",
    vi: "Ai muốn đọc nhiều sách?",
    answer: "B",
  },
  {
    topic: "Reading book",
    en: "Who reads more than another family member?",
    vi: "Ai đọc nhiều hơn một thành viên khác trong gia đình?",
    answer: "A",
  },
  {
    topic: "Reading book",
    en: "Who has limited time to read books?",
    vi: "Ai có thời gian hạn chế để đọc sách?",
    answer: "D",
  },
  //câu 9
  {
    topic: "Eating and Cooking",
    en: "Who only wants to eat a few range of food?",
    vi: "Ai chỉ muốn ăn một vài loại thức ăn?",
    answer: "A",
  },
  {
    topic: "Eating and Cooking",
    en: "Who prefers to eat alone?",
    vi: "Ai thích ăn một mình?",
    answer: "B",
  },
  {
    topic: "Eating and Cooking",
    en: "Who likes to eat with friends?",
    vi: "Ai thích ăn cùng bạn bè?",
    answer: "C",
  },
  {
    topic: "Eating and Cooking",
    en: "Who likes to eat a wide range of dishes?",
    vi: "Ai thích ăn nhiều loại món ăn?",
    answer: "D",
  },
  {
    topic: "Eating and Cooking",
    en: "Who is taking a cookery course?",
    vi: "Ai đang học khóa nấu ăn?",
    answer: "D",
  },
  {
    topic: "Eating and Cooking",
    en: "Who prefers to eat home-cooked food?",
    vi: "Ai thích ăn đồ ăn nấu tại nhà?",
    answer: "A",
  },
  {
    topic: "Eating and Cooking",
    en: "Who needs to save money on eating?",
    vi: "Ai cần tiết kiệm tiền ăn uống?",
    answer: "B",
  },
  //câu 10 
  {
    topic: "Art",
    en: "Who has some artistic skills?",
    vi: "Ai có một số kỹ năng nghệ thuật?",
    answer: "A",
  },
  {
    topic: "Art",
    en: "Who thinks seeing exhibitions is a boring activity?",
    vi: "Ai nghĩ rằng việc xem triển lãm là một hoạt động nhàm chán?",
    answer: "A",
  },
  {
    topic: "Art",
    en: "Who prefers seeing exhibitions/art by themselves?",
    vi: "Ai thích tự mình xem triển lãm/nghệ thuật?",
    answer: "B",
  },
  {
    topic: "Art",
    en: "Who thinks visitors should focus on the art?",
    vi: "Ai nghĩ rằng du khách nên tập trung vào nghệ thuật?",
    answer: "B",
  },
  {
    topic: "Art",
    en: "Who has a good knowledge about art?",
    vi: "Ai có kiến thức tốt về nghệ thuật?",
    answer: "C",
  },
  {
    topic: "Art",
    en: "Who prefers going to art exhibitions with other people?",
    vi: "Ai thích đi xem triển lãm nghệ thuật cùng người khác?",
    answer: "D",
  },
  {
    topic: "Art",
    en: "Who has been going to art exhibitions all their life?",
    vi: "Ai đã đi xem triển lãm nghệ thuật suốt cuộc đời?",
    answer: "D",
  },
  //câu 11
  {
    topic: "Visit an island",
    en: "Who forgot to bring something?",
    vi: "Ai quên mang theo thứ gì đó?",
    answer: "A",
  },
  {
    topic: "Visit an island",
    en: "Who thought public transport should be improved?",
    vi: "Ai nghĩ rằng giao thông công cộng nên được cải thiện?",
    answer: "C",
  },
  {
    topic: "Visit an island",
    en: "Who loved eating food here?",
    vi: "Ai thích ăn đồ ăn ở đây?",
    answer: "D",
  },
  {
    topic: "Visit an island",
    en: "Who paid/spent a lot of money on transport?",
    vi: "Ai trả nhiều tiền cho phương tiện đi lại?",
    answer: "B",
  },
  {
    topic: "Visit an island",
    en: "Who liked to walk?",
    vi: "Ai thích đi bộ?",
    answer: "C",
  },
  {
    topic: "Visit an island",
    en: "Who liked buying things on the island?",
    vi: "Ai thích mua sắm trên đảo?",
    answer: "D",
  },
  {
    topic: "Visit an island",
    en: "Who liked to be alone?",
    vi: "Ai thích ở một mình?",
    answer: "A",
  },
  //câu 12
  {
    topic: "Plan for a new station",
    en: "Who thinks that people should plan their journeys better?",
    vi: "Ai nghĩ rằng mọi người nên lập kế hoạch cho chuyến đi của mình tốt hơn?",
    answer: "A",
  },
  {
    topic: "Plan for a new station",
    en: "Who thinks that the bus is too busy?",
    vi: "Ai nghĩ rằng xe buýt quá đông đúc?",
    answer: "B",
  },
  {
    topic: "Plan for a new station",
    en: "Who thinks that the new station will improve train travel?",
    vi: "Ai nghĩ rằng nhà ga mới sẽ cải thiện việc đi tàu?",
    answer: "B",
  },
  {
    topic: "Plan for a new station",
    en: "Who thinks that the bus service is good?",
    vi: "Ai nghĩ rằng dịch vụ xe buýt tốt?",
    answer: "C",
  },
  {
    topic: "Plan for a new station",
    en: "Who thinks that better medical facilities are needed?",
    vi: "Ai nghĩ rằng cần có cơ sở y tế tốt hơn?",
    answer: "D",
  },
  {
    topic: "Plan for a new station",
    en: "Who thinks that the transport system doesn’t need improving?",
    vi: "Ai nghĩ rằng hệ thống giao thông không cần cải thiện?",
    answer: "C",
  },
  {
    topic: "Plan for a new station",
    en: "Who thinks that the new station will cost too much to build?",
    vi: "Ai nghĩ rằng nhà ga mới sẽ tốn quá nhiều chi phí để xây dựng?",
    answer: "D",
  },
  //câu 13
  {
    topic: "Watching a movie",
    en: "Who saw the film previously?",
    vi: "Ai đã xem phim trước đây?",
    answer: "A",
  },
  {
    topic: "Watching a movie",
    en: "Who thought the film was too long?",
    vi: "Ai đã nghĩ rằng phim quá dài?",
    answer: "D",
  },
  {
    topic: "Watching a movie",
    en: "Who saw the film at home?",
    vi: "Ai đã xem phim ở nhà?",
    answer: "B",
  },
  {
    topic: "Watching a movie",
    en: "Who saw the movie with friends?",
    vi: "Ai đã xem phim cùng bạn bè?",
    answer: "C",
  },
  {
    topic: "Watching a movie",
    en: "Who has read the book of the film?",
    vi: "Ai đã đọc sách về bộ phim?",
    answer: "D",
  },
  {
    topic: "Watching a movie",
    en: "Who found the film scary?",
    vi: "Ai thấy phim đáng sợ?",
    answer: "A",
  },
  {
    topic: "Watching a movie",
    en: "Who enjoyed the story of the film?",
    vi: "Ai rất thích câu chuyện của bộ phim?",
    answer: "B",
  },
  //câu 14
  {
    topic: "Use the internet",
    en: "Who uses the internet to communicate with family?",
    vi: "Ai sử dụng internet để giao tiếp với gia đình?",
    answer: "A",
  },
  {
    topic: "Use the internet",
    en: "Who advises against using the internet before going to bed?",
    vi: "Ai khuyên không nên sử dụng internet trước khi đi ngủ?",
    answer: "B",
  },
  {
    topic: "Use the internet",
    en: "Who depends on the internet?",
    vi: "Ai phụ thuộc vào internet?",
    answer: "A",
  },
  {
    topic: "Use the internet",
    en: "Who uses the internet for work purposes?",
    vi: "Ai sử dụng internet cho mục đích công việc?",
    answer: "C,B", // Để nguyên nếu đề yêu cầu đọc đoạn văn để xác định rõ
  },
  {
    topic: "Use the internet",
    en: "Who uses the internet for entertainment?",
    vi: "Ai sử dụng internet để giải trí?",
    answer: "C",
  },
  {
    topic: "Use the internet",
    en: "Who does not want children to use the phone?",
    vi: "Ai không muốn trẻ em sử dụng điện thoại?",
    answer: "D",
  },
  {
    topic: "Use the internet",
    en: "Who wants or buys the latest electronic devices/products?",
    vi: "Ai muốn/mua các thiết bị/sản phẩm điện tử mới nhất?",
    answer: "C",
  },
  //câu 15
  {
    topic: "Different types of vacations",
    en: "Who talked about trying exotic foods and meeting local people?",
    vi: "Ai đã nói về việc thử những món ăn kỳ lạ và gặp gỡ người dân địa phương?",
    answer: "C",
  },
  {
    topic: "Different types of vacations",
    en: "Who mentioned about the healthy to join the holiday?",
    vi: "Ai đã đề cập đến việc tham gia kỳ nghỉ lành mạnh?",
    answer: "D",
  },
  {
    topic: "Different types of vacations",
    en: "Who had a great time enjoying nature with a group of new friends?",
    vi: "Ai đã có khoảng thời gian tuyệt vời tận hưởng thiên nhiên cùng một nhóm bạn mới?",
    answer: "D",
  },
  {
    topic: "Different types of vacations",
    en: "Who suggested bringing the shelters (tents) for tourists?",
    vi: "Ai đã đề xuất mang theo nơi trú ẩn (lều) cho khách du lịch?",
    answer: "D",
  },
  {
    topic: "Different types of vacations",
    en: "Who mentioned the increasing fees of cost living?",
    vi: "Ai đã đề cập đến việc tăng chi phí sinh hoạt?",
    answer: "A",
  },
  {
    topic: "Different types of vacations",
    en: "Who mentioned that the experts will explain everything about the two poles?",
    vi: "Ai đã đề cập đến việc các chuyên gia sẽ giải thích mọi thứ về hai cực?",
    answer: "B",
  },
  {
    topic: "Different types of vacations",
    en: "Who mentioned enjoying nature with a group of new friends?",
    vi: "Ai đã đề cập đến việc tận hưởng thiên nhiên cùng một nhóm bạn mới?",
    answer: "D",
  },

];

const OPTIONS = ["A", "B", "C", "D" , "C,D" , "C,B"];

// Gom DATA thành các nhóm theo topic
const groupByTopic = (data) => {
  const map = {};
  data.forEach(item => {
    if (!map[item.topic]) map[item.topic] = [];
    map[item.topic].push(item);
  });
  return Object.entries(map).map(([topic, rows]) => ({ topic, rows }));
};

const TOPIC_GROUPS = groupByTopic(DATA);

const TharoAptisReadingPart4 = () => {
  const [page, setPage] = useState(0);
  // Mỗi trang là 1 topic group
  const currentGroup = TOPIC_GROUPS[page];
  const [userAnswers, setUserAnswers] = useState(
    Array(TOPIC_GROUPS.length).fill().map((_, i) => Array(TOPIC_GROUPS[i].rows.length).fill(""))
  );
  const [showResult, setShowResult] = useState(false);

  const handleSelect = (rowIdx, value) => {
    setUserAnswers(prev => {
      const arr = prev.map(a => [...a]);
      arr[page][rowIdx] = value;
      return arr;
    });
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
    setShowResult(false);
  };

  return (
    <div className="part4-container">
      <h2 className="part4-title">Reading Part 4</h2>
      <div className="part4-topic">Topic: <b>{currentGroup.topic}</b></div>
      <div className="part4-pagination" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: 18, gap: 16 }}>
        <button
          className="part4-check-btn"
          style={{ minWidth: 40, padding: '6px 16px', fontSize: 20 }}
          onClick={() => handlePageChange(Math.max(0, page - 1))}
          disabled={page === 0}
        >&lt;</button>
        <span style={{ fontWeight: 600, color:"black", fontSize: 17 }}>Page {page + 1} / {TOPIC_GROUPS.length}</span>
        <button
          className="part4-check-btn"
          style={{ minWidth: 40, padding: '6px 16px', fontSize: 20 }}
          onClick={() => handlePageChange(Math.min(TOPIC_GROUPS.length - 1, page + 1))}
          disabled={page === TOPIC_GROUPS.length - 1}
        >&gt;</button>
      </div>
      <table className="part4-table">
        <thead>
          <tr>
            <th>English</th>
            <th>Tiếng Việt</th>
            <th>Your Answer</th>
          </tr>
        </thead>
        <tbody>
          {currentGroup.rows.map((row, idx) => (
            <tr key={idx}>
              <td dangerouslySetInnerHTML={{ __html: row.en }} />
              <td dangerouslySetInnerHTML={{ __html: row.vi }} />
              <td style={{ textAlign: "center" }}>
                <select
                  className="part4-select"
                  value={userAnswers[page][idx]}
                  onChange={e => handleSelect(idx, e.target.value)}
                >
                  <option value="">--</option>
                  {OPTIONS.map(opt => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
                {showResult && userAnswers[page][idx] && (
                  <span style={{ marginLeft: 10, fontWeight: 600, color: userAnswers[page][idx] === row.answer ? '#2ecc40' : '#ff4136' }}>
                    {userAnswers[page][idx] === row.answer ? '✔' : '✘'}
                  </span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ textAlign: 'center' }}>
        <button
          className="part4-check-btn"
          onClick={() => setShowResult(true)}
        >
          Check Answers
        </button>
      </div>
    </div>
  );
};

export default TharoAptisReadingPart4; 