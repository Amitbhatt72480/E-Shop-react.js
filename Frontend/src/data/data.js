const data = [
	{
		id : 'price_1MuBn0SGp78l6VO34q72qj0v',
		title: 'Leather Bag',
		price: '40',
		description: 'A fine quality bag',
		image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
		category: `women's clothing`
	},
	{
		id : 'price_1MuBnuSGp78l6VO3z1VRHuOr',
		title: 'Denim Jacket',
		price: '50',
		description: 'A fine quality Jacket',
		image:'https://images.unsplash.com/photo-1543076447-215ad9ba6923?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
		category: `men's clothing`
	},
	{
		id : 'price_1MuBoBSGp78l6VO3hu1oSwhL',
		title: 'Cotton Tshirt',
		price: '20',
		description: 'A fine quality Tshirt white printed T-shirt, has a round neck, and short sleeves',
		image:'https://images.unsplash.com/photo-1620799139834-6b8f844fbe61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1072&q=80',
		category: `men's clothing`
	},
	{
		id : 'price_1MuBoQSGp78l6VO3MDqFLbHI',
		title: 'Blazer',
		price: '200',
		description: 'A fine quality Blazer made of high quality material, Navy Blue color',
		image: "https://images.unsplash.com/photo-1593030103066-0093718efeb9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
		category: `men's clothing`
	},
	{
		id : 'price_1MuBoiSGp78l6VO3FZZJpWrz',
		title: 'Hoodie',
		price: '40',
		description: 'Black Hoodie made of 100% Cotton',
		image: "https://images.unsplash.com/photo-1513789181297-6f2ec112c0bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
		category: `men's clothing`
	},
	{
		id : 'price_1MuBp1SGp78l6VO36BNNyI20',
		title: 'Sweater',
		price: '35',
		description: 'Warm Sweater for mens',
		image: "https://images.unsplash.com/photo-1631541909061-71e349d1f203?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=405&q=80",
		category: `men's clothing`
	},
	{
		id : 'price_1MuBpHSGp78l6VO3yosu6zgZ',
		title: 'Nike Shoes',
		price: '99',
		description: 'Nike sports shoes with high quality material',
		image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
		category: `men's clothing`
	},
	{
		id : 'price_1MuBpXSGp78l6VO3JJq4iZZT',
		title: 'Sweatpants',
		price: '60',
		description: 'High quality Sweatpants and comfortable to wear',
		image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
		category: `women's clothing`
	},
	{
		id : 'price_1MuBpwSGp78l6VO3Nr28ynkW',
		title: 'Crop Top',
		price: '70',
		description: 'women top with beautiful design made of cotton',
		image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=405&q=80",
		category: `women's clothing`
	},
	{
		id : 'price_1MuBqDSGp78l6VO39vJ8K28D',
		title: 'Blue top',
		price: '60',
		description: 'Blue top with good quality material perfect for summers',
		image: "https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
		category: `women's clothing`
	},
	{
		id : 'price_1MuBqTSGp78l6VO3AvKXyftj',
		title: 'Nike Female shoes',
		price: '60',
		description: 'Good quality shoes and durable',
		image: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80",
		category: `women's clothing`
	},
	{
		id : 'price_1MuBqhSGp78l6VO3Mktxj9eI',
		title: 'Heels',
		price: '110',
		description: 'Heel shoes for women, durable and long lasting',
		image: "https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
		category: `women's clothing`
	},
	{
		id : 'price_1MuBqySGp78l6VO3JfR6AUFj',
		title: 'Ring',
		price: '600',
		description: 'High Quality diamond ring',
		image: "https://images.unsplash.com/photo-1579726670131-487ecc8e1e8a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
		category: `Jewellery`
	},
	{
		id : 'price_1MuBrCSGp78l6VO3mFS0zcYU',
		title: 'Gold Band',
		price: '450',
		description: 'High quality Gold band',
		image: "https://images.unsplash.com/photo-1586878341523-7acb55eb8c12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
		category: `Jewellery`
	},
	{
		id : 'price_1MuBrVSGp78l6VO3TFwS9Cgy',
		title: 'Crystal Diamong ring',
		price: '990',
		description: 'Pure diamond ring',
		image: "https://images.unsplash.com/photo-1584377334016-464803e03b80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
		category: `Jewellery`
	},
	{
		id : 'price_1MuBsOSGp78l6VO3hjIvHBwt',
		title: 'Bracelets combo',
		price: '1190',
		description: 'Bracelets of three with pure gold for womens',
		image: "https://images.unsplash.com/photo-1599708978061-501091150ec9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1334&q=80",
		category: `Jewellery`
	},
	{
		id : 'price_1MuBsfSGp78l6VO3KFMzP3Uq',
		title: 'Gold Necklace',
		price: '990',
		description: 'Pure 24k gold necklace',
		image: "https://plus.unsplash.com/premium_photo-1678730056371-eff9c5356a48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
		category: `Jewellery`
	},
	{
		id : 'price_1MuBsxSGp78l6VO3MfWFkrll',
		title: 'Diamond bracelet',
		price: '1500',
		description: 'Beatiful bracelet made of all diamonds',
		image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
		category: `Jewellery`
	},
	{
		id : 'price_1MuBtLSGp78l6VO3SnlXPucN',
		title: 'Headphone and earbuds combo',
		price: '300',
		description: 'Combo of headphones and earbuds from Apple',
		image: "https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1326&q=80",
		category: `Electronics`
	},
	{
		id : 'price_1MuBtYSGp78l6VO3eKPTG2DO',
		title: 'Watch',
		price: '90',
		description: 'Beautiful watch with elegant design made of leather straps',
		image: "https://images.unsplash.com/photo-1557438159-51eec7a6c9e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
		category: `Electronics`
	},
	{
		id : 'price_1MuBtqSGp78l6VO3u49q6nAQ',
		title: 'Desktop Set',
		price: '999',
		description: 'Combo of the desktop set with monitor, mouse and cpu with high specifications.',
		image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1142&q=80",
		category: `Electronics`
	},
	{
		id : 'price_1MuBuBSGp78l6VO3jqvQNUIB',
		title: 'Mobile 8Gb Ram',
		price: '300',
		description: 'Mobile 8 gb ram, 128gb rom, snapdragon 880',
		image: "https://images.unsplash.com/photo-1606293459339-aa5d34a7b0e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1931&q=80",
		category: `Electronics`
	},
	{
		id : 'price_1MuBuRSGp78l6VO3IhKN80Lc',
		title: 'Apple watch',
		price: '400',
		description: 'Black apple watch',
		image: "https://images.unsplash.com/photo-1580943943004-6a4697b70059?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
		category: `Electronics`
	},
	{
		id : 'price_1MuBujSGp78l6VO3ZbggcvFN',
		title: 'Sony Camera',
		price: '600',
		description: 'Imported Sony camera with high quality build',
		image: "https://images.unsplash.com/photo-1505739998589-00fc191ce01d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
		category: `Electronics`
	},


]

export default data;