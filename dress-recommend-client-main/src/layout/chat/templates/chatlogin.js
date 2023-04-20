var NewComponent = React.createClass({
  render: function() {
    return (
      <div>
        <title>Chat For You Login</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/*===============================================================================================*/}	
        <link rel="icon" type="image/png" href="/images/login/icons/favicon.ico" />
        {/*===============================================================================================*/}
        <link rel="stylesheet" type="text/css" href="/vendor/bootstrap/css/bootstrap.min.css" />
        {/*===============================================================================================*/}
        <link rel="stylesheet" type="text/css" href="/fonts/font-awesome-4.7.0/css/font-awesome.min.css" />
        {/*===============================================================================================*/}
        <link rel="stylesheet" type="text/css" href="/fonts/iconic/css/material-design-iconic-font.min.css" />
        {/*===============================================================================================*/}
        <link rel="stylesheet" type="text/css" href="/vendor/animate/animate.css" />
        {/*===============================================================================================*/}	
        <link rel="stylesheet" type="text/css" href="/vendor/css-hamburgers/hamburgers.min.css" />
        {/*===============================================================================================*/}
        <link rel="stylesheet" type="text/css" href="/vendor/animsition/css/animsition.min.css" />
        {/*===============================================================================================*/}
        <link rel="stylesheet" type="text/css" href="/vendor/select2/select2.min.css" />
        {/*===============================================================================================*/}	
        <link rel="stylesheet" type="text/css" href="/vendor/daterangepicker/daterangepicker.css" />
        {/*===============================================================================================*/}
        <link rel="stylesheet" type="text/css" href="/css/login/util.css" />
        <link rel="stylesheet" type="text/css" href="/css/login/main.css" />
        {/*===============================================================================================*/}
        <div className="limiter">
          <div className="container-login100" style={{backgroundImage: 'url("/images/login/bg-01.jpg")'}}>
            <div className="wrap-login100">
              <form className="login100-form validate-form">
                <span className="login100-form-logo">
                  <i className="zmdi zmdi-landscape" />
                </span>
                <span className="login100-form-title p-b-34 p-t-27">
                  Log in
                </span>
                <div className="wrap-input100 validate-input" data-validate="Enter username">
                  <input className="input100" type="text" name="username" placeholder="Username" />
                  <span className="focus-input100" data-placeholder="" />
                </div>
                <div className="wrap-input100 validate-input" data-validate="Enter password">
                  <input className="input100" type="password" name="pass" placeholder="Password" />
                  <span className="focus-input100" data-placeholder="" />
                </div>
                <div className="contact100-form-checkbox">
                  <input className="input-checkbox100" id="ckb1" type="checkbox" name="remember-me" />
                  <label className="label-checkbox100" htmlFor="ckb1">
                    Remember me
                  </label>
                </div>
                <div className="container-login100-form-btn">
                  <button className="login100-form-btn">
                    Login
                  </button>
                </div>
                <div className="social-login">
                  <div>
                    <span className="d-block text-left my-4 text-muted" />
                    <a href="http://localhost:8080/oauth2/authorization/kakao">
                      <img src="/images/login/kakaotalk.png" width={200} height="auto" alt="" />
                    </a>
                    <a href="http://localhost:8080/oauth2/authorization/naver">
                      <img src="/images/login/naver.png" width={200} height="auto" alt="" />
                    </a>
                  </div>
                </div>
                <div className="text-center p-t-90">
                  <a className="txt1" href="/">
                    로그인 없이 채팅하기
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div id="dropDownSelect1" />
        {/*===============================================================================================*/}
        {/*===============================================================================================*/}
        {/*===============================================================================================*/}
        {/*===============================================================================================*/}
        {/*===============================================================================================*/}
        {/*===============================================================================================*/}
        {/*===============================================================================================*/}
      </div>
    );
  }
});