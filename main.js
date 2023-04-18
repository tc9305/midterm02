$(function(){
    function updateCourseTable(){
        $("#courseTable").empty();
        $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>");
        var topicCount= topic.length;

        //一秒鐘有1000毫秒
        //每分鐘60秒、每小時60分鐘、每天24小時
        let millisecsPerDay = 24*60*60*1000;

        for(var x=0;x<topicCount;x++){
            let date = new Date(startDate.getTime()+7*x*millisecsPerDay);
            let topicCell = `<td>${topic[x]}</td>`;
            if (x % 2 == 1) {
                topicCell = `<td class="courseCanceled">${topic[x]}</td>`;
            }
            $("#courseTable").append("<tr>"+
                `<td>${x+1}</td>`+
               `<td>${date.toLocaleDateString(undefined, { month: 'numeric', day: 'numeric'})}</td>`+
                topicCell +
                "</tr>");
        }
    }

    updateCourseTable();

    $("#updateBtn").on("click", function() {
        startDate = new Date($("#startDatePicker").val());
        updateCourseTable();
    });
});
