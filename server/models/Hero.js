const mongoose = require('mongoose')

const schema = new mongoose.Schema({
	name: {
		type: String
	},
	// 装备图标
	avatar: {
		type: String
	},
	// 职业
	title: {
		type: String
	},
	// 类别
	categories: [{
		type: mongoose.SchemaTypes.ObjectId,
		ref: 'Category'
	}],
	// 分值
	scores: {
		difficult: {
			type: Number
		},
		skills: {
			type: Number
		},
		attack: {
			type: Number
		},
		survive: {
			type: Number
		},
	},
	// 技能
	skills: [{
		icon: {
			type: String
		},
		name: {
			type: String
		},
		description: {
			type: String
		},
		tips: {
			type: String
		}
	}],
	// 装备
	items1: [{
		type: mongoose.SchemaTypes.ObjectId,
		ref: 'Item'
	}],
	items2: [{
		type: mongoose.SchemaTypes.ObjectId,
		ref: 'Item'
	}],
	// 底部文字介绍
	usageTips: {
		type: String
	},
	// 底部文字介绍
	battleTips: {
		type: String
	},
	// 底部文字介绍
	teamTips: {
		type: String
	},
	// 搭档
	partens: [{
		hero: {
			type: mongoose.SchemaTypes.ObjectId,
			ref: 'Hero'
		},
		description: {
			type: String
		}
	}]
})

module.exports = mongoose.model('Hero', schema)
