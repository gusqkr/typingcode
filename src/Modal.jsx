// Modal.jsx
import './Modal.css'

const Modal = () => {
  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <h1 className="modal-title">Notice</h1>

        <div className="modal-content">
          <p>1. 공백 문자는 모두 space 키를 통해 작성합니다.</p>
          <p>
            2. 오른쪽 상단의 X 표시를 선택할 경우 게임을 강제 종료할 수
            있습니다.
          </p>
          <p>3. 닫기 버튼 클릭 시, 3초 카운트 후 게임이 시작됩니다.</p>
          <p>
            4. 그만보기 버튼 선택 시, 다음 게임부터 3초 카운트가 바로
            진행됩니다.
          </p>
        </div>

        <div className="modal-button-group">
          <button className="btn-secondary">그만보기</button>
          <button className="btn-primary">닫기</button>
        </div>
      </div>
    </div>
  )
}

export default Modal
