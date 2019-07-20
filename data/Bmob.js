Bmob.initialize("bb68d9125daecf217b3f2ac83f614052", "2e62d8082259b4b90276b053edf4571b");

function save() {
    const query = Bmob.Query("data");
    query.set("content", "test");
    query.set("picture", "test");
    query.save();
}

function get() {
    const main_div = document.getElementById("main_layout");
    const card_div=document.getElementById("card_layout");
    const query = Bmob.Query("data");
    query.find().then(res => {
        const obj = eval(res);
        const div = document.createElement("div");
        const div2=document.createElement("h1");
        div2.innerHTML=obj.createdAt;
        div.appendChild(div2);
        main_div.appendChild(div);
        console.log(res);
    })

}