# CLAUDE.md

## Mục tiêu
Build một trang web CV/portfolio cá nhân, một trang (single page), để gửi cho nhà tuyển dụng.
Nội dung lấy từ 2 file PDF CV đính kèm: `cv-en.pdf` (tiếng Anh) và `cv-jp.pdf` (tiếng Nhật).
Người dùng có thể chuyển đổi ngôn ngữ EN/JP bằng một nút toggle, không reload trang.

## Input
- `cv-en.pdf` — CV bản tiếng Anh, dùng làm nguồn nội dung cho ngôn ngữ EN.
- `cv-jp.pdf` — CV bản tiếng Nhật, dùng làm nguồn nội dung cho ngôn ngữ JP.
- Đọc kỹ cả 2 file, trích xuất: tên, chức danh, giới thiệu ngắn, kinh nghiệm làm việc,
  học vấn, kỹ năng, chứng chỉ, thông tin liên hệ. Giữ đúng thông tin, không bịa thêm.
- Nếu 2 bản PDF có nội dung lệch nhau (ví dụ JP có thêm mục mà EN không có), giữ nguyên
  sự khác biệt đó theo từng ngôn ngữ, không cố gắng làm cho 2 bản giống nhau.

## Yêu cầu chức năng
- Single page, scroll dọc, các section: Hero/Intro, About, Experience, Skills,
  Education, Contact (tự điều chỉnh nếu CV có cấu trúc khác).
- Nút toggle EN/JP cố định (ví dụ ở header), đổi toàn bộ nội dung trang ngay lập tức.
- Responsive: dùng tốt trên mobile và desktop.
- Có nút/link download PDF gốc theo ngôn ngữ đang chọn.
- SEO cơ bản: title, meta description, OG tags (theo ngôn ngữ đang chọn nếu hợp lý).

## Tech stack
- Next.js (App Router), TypeScript.
- Styling: Tailwind CSS.
- Không cần backend/database — toàn bộ nội dung là static, đưa vào file data
  (ví dụ `data/cv-en.ts`, `data/cv-jp.ts`) thay vì gọi PDF runtime.
- Deploy lên Vercel.

## Việc Claude Code tự quyết
- Cấu trúc folder, tên component, cách chia nhỏ section.
- Cách lưu trữ nội dung 2 ngôn ngữ (file JSON/TS riêng, hoặc context — tự chọn cách gọn nhất).
- Thiết kế UI/UX, màu sắc, font, animation — ưu tiên gọn, chuyên nghiệp, dễ đọc,
  phù hợp gửi cho nhà tuyển dụng (không cần quá sặc sỡ).
- Có thể đề xuất thêm các tính năng nhỏ hợp lý (ví dụ dark mode) nếu thấy có giá trị,
  nhưng không bắt buộc.

## Định nghĩa "xong"
- `npm run build` chạy không lỗi.
- Toggle EN/JP hoạt động đúng, không mất nội dung.
- Trang responsive tốt trên màn hình điện thoại.
- Sẵn sàng deploy bằng `vercel` hoặc qua GitHub + Vercel integration.

## Đã thực hiện

### Cấu trúc file
- `src/data/cv.ts` — toàn bộ nội dung CV cả 2 ngôn ngữ trong 1 file, export `cvData['en']` và `cvData['jp']`.
- `src/components/Portfolio.tsx` — toàn bộ UI trong 1 file, chia thành các function component: `Header`, `Hero`, `About`, `ExperienceSection`, `SkillsSection`, `EducationSection`, `ContactSection`.
- `src/app/page.tsx` — chỉ render `<Portfolio />`.
- `public/cv-en.pdf`, `public/cv-jp.pdf` — file PDF gốc để download.
- `public/hinhthe.jpg` — ảnh cá nhân, hiển thị ở Hero section.

### Tính năng đã có
- Toggle EN/JP trên header, đổi toàn bộ nội dung không reload.
- Dark mode toggle (class-based, lưu trong state).
- Download PDF theo ngôn ngữ đang chọn (header + hero + contact section).
- Rainbow bar (6 màu) ngăn cách các section.
- Ảnh cá nhân (`hinhthe.jpg`) ở Hero: desktop 2 cột, mobile ảnh ở trên.

### Quyết định thiết kế
- Không dùng border màu đen (`border-gray-900`) — đã xóa toàn bộ theo yêu cầu.
- Màu chủ đạo: rose-500, với accent sky, amber, emerald, violet, orange.
- Logo header: `public/logo.png` (dùng `next/image`).