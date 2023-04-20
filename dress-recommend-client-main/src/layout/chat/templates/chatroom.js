var NewComponent = React.createClass({
    render: function() {
      return (
        <div>
          <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0" />
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossOrigin="anonymous" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
          <title>My Spring WebSocket Chatting</title>
          <link rel="stylesheet" href="/css/chatroom/main.css" />
          <style dangerouslySetInnerHTML={{__html: "\n        #menu{\n            width: 310px;\n        }\n        button#uploadFile {\n            margin-left: 225px;\n            margin-top: -55px;\n        }\n        input {\n            padding-left: 5px;\n            outline: none;\n            width: 250px;\n            margin-top: 15px;\n        }\n        .btn fa fa-download {\n            background-color: DodgerBlue;\n            border: none;\n            color: white;\n            padding: 12px 30px;\n            cursor: pointer;\n            font-size: 20px;\n        }\n    " }} />
          <noscript>
            &lt;h2&gt;Sorry! Your browser doesn't support Javascript&lt;/h2&gt;
          </noscript>
          <div id="username-page">
            <div className="username-page-container">
              <h1 className="title">Type your username</h1>
              <form id="usernameForm" name="usernameForm">
                <div th:if="${user == null}" className="form-group">
                  <input type="text" id="name" placeholder="Username" autoComplete="off" className="form-control" />
                </div>
                <div th:if="${user != null}" className="form-group">
                  <input type="text" id="name" placeholder="Username" autoComplete="off" className="form-control" th:value="${user.userName}" />
                </div>
                <div className="form-group">
                  <button type="submit" className="accent username-submit">Start Chatting</button>
                </div>
              </form>
            </div>
          </div>
          <div id="chat-page" className="hidden">
            <div className="btn-group dropend">
              <button className="btn btn-secondary dropdown-toggle" type="button" id="showUserListButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                참가한 유저
              </button>
              <div id="list" className="dropdown-menu" aria-labelledby="showUserListButton">
              </div>
            </div>
            <div className="btn-group dropend">
              <button className="btn btn-secondary dropdown-toggle" type="button" id="showMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                파일 업로드
              </button>
              <div id="menu" className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <input type="file" id="file" />
                <button type="button" className="btn btn-primary" id="uploadFile" onclick="uploadFile()">저장</button>
              </div>
            </div>
            <div className="chat-container">
              <div className="chat-header">
                <h2>[[${'{'}room.roomName{'}'}]]</h2>
              </div>
              <div className="connecting">
                Connecting...
              </div>
              <ul id="messageArea">
              </ul>
              <form id="messageForm" name="messageForm" nameform="messageForm">
                <div className="form-group">
                  <div className="input-group clearfix">
                    <input type="text" id="message" placeholder="Type a message..." autoComplete="off" className="form-control" />
                    <button type="submit" className="primary">Send</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      );
    }
  });