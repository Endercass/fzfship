let db = {
  items: [],
};

const base =
  "https://objectstorage.us-ashburn-1.oraclecloud.com/n/idnlbof7ef1t/b/100seconds/o/";

function buildItem(url) {
  let item = {};
  item.name = url.name.split(" ")[0].toLowerCase();
  item.url = `${base}${encodeURIComponent(url.name)}`;
  item.aliases = [];
  return item;
}
fetch(base)
  .then((res) => res.json())
  .then((data) => {
    db.items.push(buildItem(data.objects[0]));
    console.log(JSON.stringify(db, null, 2));
  });
