module.exports = {
	applicationKey: "{{APPKEY}}",
	caching: 'both',
	headless: false,
	samplesPerTarget: 3,
	measurements: ["first-paint", "first-contentful-paint", "tti", "d2l.page.*"],
	properties: ["app-version", "polymer"],
	target: {
		site: "{{LMSSITE}}",
		login: {
			url: "/d2l/login",
			user: {selector: "#userName", value: "{{LMSUSER}}"},
			password: {selector: "#password", value: "{{LMSPWD}}"},
			submit: {selector: ".d2l-button[primary]"}
		},
		targets: [
			{name: "home", url: "/d2l/home"},
			{name: "announcements", url: "/d2l/lms/news/main.d2l?ou=6606"},
			{name: "content", url: "/d2l/le/content/6606/Home"},
			{name: "course-home-banner", url: "/d2l/home/6609"}
		]
	},
	upload: {
		key: 'S3',
		target: '{{S3TARGET}}',
		region: 'us-east-1',
		creds: {
			accessKeyId: '{{S3ID}}',
			secretAccessKey: '{{S3KEY}}'
		}
	}
};
