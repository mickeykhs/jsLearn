var v_tableName = "noticeTB";
var request = {};  // name space용 빈객체
// 사용자 요청을 담은 객체
request.getParameter = function (p_name) {
    if(location.href.indexOf("?") == -1) return null;
    var v_queryString = location.href.split("?")[1];
    var v_nvSSang = v_queryString.split("&");
    for(var i=0; i<v_nvSSang.length; i++){
        var nv = v_nvSSang[i].split("=");
        if(nv[0] == p_name){
            return decodeURIComponent(nv[1]);
        }
    }
    return null;
}

// 같은 name으로 값이 여러개 넘엉오는 것 처리 함수
request.getParameterValues = function (p_name){
    if(location.href.indexOf("?") == -1) return null;
    var v_queryString = location.href.split("?")[1];
    var v_values = [];
    var v_nvSSang = v_queryString.split("&");

    for(var i=0; i<v_nvSSang.length; i++){
        var nv = v_nvSSang[i].split("=");
        if(nv[0] == p_name){
            v_values.push(nv[1]);
        }
    }
    if(!v_values.length) return null;
    return v_values;
}
