
const express = require('express')
var cors = require('cors');
const stripe = require('stripe')('sk_test_51MtwT8SGp78l6VO3RbfeB9XxWqHPRKIwF2ZVSTyRWXdq88kuhu8aN8rhxd1WAhiOvOitD5Ktu1Dk56yBo1lp4SA800SH5JU0Uu')

const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

app.post("/checkout", async (req, res) => {
	
    console.log(req.body);
    const items = req.body.items;
    let lineItems = [];
    items.forEach((item)=> {
        lineItems.push(
            {
                price: item.id,
                quantity: item.quantity
            }
        )
    });

    const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: 'payment',
        success_url: "http://localhost:3000/success",
        cancel_url: "http://localhost:3000/cancel"
    });

    res.send(JSON.stringify({
        url: session.url
    }));
});

app.listen(4000, () => console.log("Listening on port 4000!"));