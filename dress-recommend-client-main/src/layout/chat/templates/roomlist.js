var NewComponent = React.createClass({
    render: function() {
      return (
        <div>
          {/* CSS only */}
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous" />
          {/* JavaScript Bundle with Popper */}
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/all.css" integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt" crossOrigin="anonymous" />
          <style dangerouslySetInnerHTML={{__html: "\n        a {\n            text-decoration: none;\n        }\n\n        #table {\n            margin-top: 40px;\n        }\n\n        h2 {\n            margin-top: 40px;\n        }\n\n        input#maxUserCnt {\n            width: 160px;\n        }\n\n        span.input-group-text.input-password-hide {\n            height: 40px;\n        }\n\n        span.input-group-text.input-password-show {\n            height: 40px;\n        }\n\n    " }} />
          <div className="container">
            <div className="container">
              <h2>채팅방 리스트</h2>
              <div th:if="${user == null}" className="row">
                <div className="col">
                  <a href="/chatlogin"><button type="button" className="btn btn-primary">로그인하기</button></a>
                </div>
              </div>
              <h5 th:if="${user != null}">
                [[${'{'}user.userName{'}'}]]
              </h5>
              <th:block th:fragment="content">
              </th:block><span className="hidden" th:id="${room.roomName}" /><table className="table table-hover" id="table">
                <tbody><tr>
                    <th scope="col">채팅방명</th>
                    <th scope="col">잠금 여부</th>
                    <th scope="col">참여 인원</th>
                    <th scope="col">채팅방 설정</th>
                  </tr>
                  <tr th:each="room : ${list}">
                    <td th:if="${room.secretChk}">
                      <a href="#enterRoomModal" data-bs-toggle="modal" data-target="#enterRoomModal" th:data-id="${room.roomId}">[[${'{'}room.roomName{'}'}]]</a>
                    </td>
                    <td th:if="${!room.secretChk}">
                      {/* thymeleaf 의 변수를 onclick 에 넣는 방법 */}
                      <a th:href="@{/chat/room(roomId=${room.roomId})}" th:roomid="${room.roomId}" onclick="return chkRoomUserCnt(this.getAttribute('roomId'));">[[${'{'}room.roomName{'}'}]]</a>
                    </td>
                    <td>
                      <span th:if="${room.secretChk}">
                        🔒︎
                      </span>
                    </td>
                    <td>
                      <span className="badge bg-primary rounded-pill">[[${'{'}room.userCount{'}'}]]/[[${'{'}room.maxUserCnt{'}'}]]</span>
                    </td>
                    <td>
                      <button className="btn btn-primary btn-sm" id="configRoom" data-bs-toggle="modal" data-bs-target="#confirmPwdModal" th:data-id="${room.roomId}">채팅방 설정</button>
                    </td>
                  </tr>
                </tbody></table>
              <button type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#roomModal">방 생성</button>
            </div>
          </div>
          <div className="modal fade" id="roomModal" tabIndex={-1} aria-labelledby="roomModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">채팅방 생성</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                </div>
                <form method="post" action="/chat/createroom" onsubmit="return createRoom()">
                  <div className="modal-body">
                    <div className="mb-3">
                      <label htmlFor="roomName" className="col-form-label">방 이름</label>
                      <input type="text" className="form-control" id="roomName" name="roomName" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="roomPwd" className="col-form-label">방 설정 번호(방 삭제시 필요합니다)</label>
                      <div className="input-group">
                        <input type="password" name="roomPwd" id="roomPwd" className="form-control" data-toggle="password" />
                        <div className="input-group-append">
                          <span className="input-group-text"><i className="fa fa-eye" /></span>
                        </div>
                      </div>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="maxUserCnt" className="col-form-label">채팅방 인원 설정(미체크 시 기본 100명)
                        <input className="form-check-input" type="checkbox" id="maxChk" /></label>
                      <input type="text" className="form-control" id="maxUserCnt" name="maxUserCnt" defaultValue={100} />
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="secret" />
                      <input type="hidden" name="secretChk" id="secretChk" defaultValue />
                      <label className="form-check-label" htmlFor="secret">
                        채팅방 잠금
                      </label>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <input type="submit" className="btn btn-primary" defaultValue="방 생성하기" />
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="modal fade" id="enterRoomModal" tabIndex={-1} aria-labelledby="enterRoomModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">채팅방 비밀번호를 입력해주세요</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                </div>
                <div className="modal-body">
                  <div className="mb-3">
                    <label htmlFor="roomName" className="col-form-label">방 비밀번호</label>
                    <div className="input-group">
                      <input type="password" name="roomPwd" id="enterPwd" className="form-control" data-toggle="password" />
                      <div className="input-group-append">
                        <span className="input-group-text"><i className="fa fa-eye" /></span>
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary" onclick="enterRoom()">입장하기</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="modal fade" id="confirmPwdModal" aria-hidden="true" aria-labelledby="ModalToggleLabel" tabIndex={-1}>
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">채팅방 설정을 위한 패스워드 확인</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                </div>
                <div className="modal-body">
                  <label htmlFor="confirmPwd" className="col-form-label" id="confirmLabel">비밀번호 확인</label>
                  <div className="input-group">
                    <input type="password" name="confirmPwd" id="confirmPwd" className="form-control" data-toggle="password" />
                    <div className="input-group-append">
                      <span className="input-group-text"><i className="fa fa-eye" /></span>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button id="configRoomBtn" className="btn btn-primary disabled" data-bs-target="#configRoomModal" data-bs-toggle="modal" aria-disabled="true">채팅방 설정하기</button>
                </div>
              </div>
            </div>
          </div>
          <div className="modal fade" id="configRoomModal" tabIndex={-1} aria-labelledby="roomModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">채팅방 설정</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                </div>
                <div className="modal-body">
                  <div className="mb-3">
                    <label htmlFor="chPwd" className="col-form-label">비밀번호 변경</label>
                    <div className="input-group">
                      <input type="password" name="confirmPwd" id="chPwd" className="form-control" data-toggle="password" />
                      <div className="input-group-append">
                        <span className="input-group-text"><i className="fa fa-eye" /></span>
                      </div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="chRoomName" className="col-form-label">채팅방 이름 변경</label>
                    <input type="text" className="form-control" id="chRoomName" name="chRoomName" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="chRoomUserCnt" className="col-form-label">채팅방 인원 변경</label>
                    <input type="text" className="form-control" id="chRoomUserCnt" name="chUserCnt" />
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="chSecret" />
                    <input type="hidden" name="secretChk" id="chSecretChk" defaultValue />
                    <label className="form-check-label" htmlFor="secret">
                      채팅방 잠금
                    </label>
                  </div>
                  <div className="mb-3">
                    <button type="button" className="btn btn-primary" onclick="delRoom()">방 삭제</button>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  });