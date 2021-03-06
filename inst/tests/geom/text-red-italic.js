{
	"width" : 600,
	"height" : 400,
	"data" : [
		{
			"name" : "89316d93e94ab2dd70437fd77dbe71f4",
			"values" : [
				{
					"x" : 1,
					"y" : 1,
					"label" : "a"
				},
				{
					"x" : 2,
					"y" : 2,
					"label" : "b"
				},
				{
					"x" : 3,
					"y" : 3,
					"label" : "c"
				}
			]
		}
	],
	"scales" : [
		{
			"name" : "x",
			"type" : "linear",
			"domain" : {
				"data" : "89316d93e94ab2dd70437fd77dbe71f4",
				"field" : "data.x"
			},
			"range" : "width",
			"zero" : false,
			"nice" : true
		},
		{
			"name" : "y",
			"type" : "linear",
			"domain" : {
				"data" : "89316d93e94ab2dd70437fd77dbe71f4",
				"field" : "data.y"
			},
			"range" : "height",
			"zero" : false,
			"nice" : true
		}
	],
	"marks" : [
		{
			"type" : "text",
			"from" : {
				"data" : "89316d93e94ab2dd70437fd77dbe71f4"
			},
			"properties" : {
				"update" : {
					"fill" : {
						"value" : "#FF0000"
					},
					"fontSize" : {
						"value" : 14.173
					},
					"text" : {
						"field" : "data.label"
					},
					"x" : {
						"field" : "data.x",
						"scale" : "x"
					},
					"y" : {
						"field" : "data.y",
						"scale" : "y"
					}
				}
			}
		}
	],
	"axes" : [
		{
			"type" : "x",
			"scale" : "x"
		},
		{
			"type" : "y",
			"scale" : "y"
		}
	],
	"padding" : {
		"top" : 20,
		"right" : 20,
		"bottom" : 20,
		"left" : 20
	}
}
