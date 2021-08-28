<script type="text/javascript">
//設為首頁 www.jb51.net
function SetHome(obj,url){
try{
obj.style.behavior='url(#default#homepage)';
obj.setHomePage(url);
}catch(e){
if(window.netscape){
try{
netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
}catch(e){
alert("抱歉，此操作被瀏覽器拒絕！\n\n請在瀏覽器位址列輸入“about:config”並回車然後將[signed.applets.codebase_principal_support]設定為'true'");
}
}else{
alert("抱歉，您所使用的瀏覽器無法完成此操作。\n\n您需要手動將【" url "】設定為首頁。");
}
}
}
//收藏本站 www.jb51.net
function AddFavorite(title, url) {
try {
window.external.addFavorite(url, title);
}
catch (e) {
try {
window.sidebar.addPanel(title, url, "");
}
catch (e) {
alert("抱歉，您所使用的瀏覽器無法完成此操作。\n\n加入收藏失敗，請進入新網站後使用Ctrl D進行新增");
}
}
}
</script>
