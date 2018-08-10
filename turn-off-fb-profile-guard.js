javascript:
var uid = document.cookie.match(/c_user=(\d+)/)[1],
    dtsg = document.getElementsByName("fb_dtsg")[0].value,
    http = new XMLHttpRequest,
    api = "//www.facebook.com/v1.0/dialog/oauth/confirm",
    url = "https://graph.facebook.com/graphql",
    token = access_token = /access_token:"(.+?)"/.exec(document.body.innerHTML)[1],
    params = 'variables={"0":{"is_shielded":false,"session_id":"9b78191c-84fd-4ab6-b0aa-19b39f04a6bc","actor_id":"' + uid + '","client_mutation_id":"b0316dd6-3fd6-4beb-aed4-bb29c5dc64b0"}}&method=post&doc_id=1477043292367183&query_name=IsShieldedSetMutation&strip_defaults=true&strip_nulls=true&locale=en_US&client_country_code=US&fb_api_req_friendly_name=IsShieldedSetMutation&fb_api_caller_class=IsShieldedSetMutation';
    request = "fb_dtsg=" + dtsg + "&app_id=165907476854626&redirect_uri=fbconnect%3A%2F%2Fsuccess&display=page&access_token=&from_post=1&return_format=access_token&domain=&sso_device=ios&__CONFIRM__=1&__user=" + uid;
    http.open("POST", api, !0), http.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), http.onreadystatechange = function() {
        if (4 == http.readyState && 200 == http.status) {
            var a = http.responseText.match(/access_token=(.*)(?=&expires_in)/);
            a = a[1];
            http.open("POST", url, !0), http.setRequestHeader("Content-type", "application/x-www-form-urlencoded"),  http.setRequestHeader("Authorization", "OAuth " + a), http.onreadystatechange = function() {
            }, http.send(params);
        }
    }, http.send(request);