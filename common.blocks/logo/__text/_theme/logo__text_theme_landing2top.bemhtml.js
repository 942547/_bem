block('logo').elem('text').elemMod('theme', 'landing2top')(
	content()(function(){
			var content = this.ctx.content;
			return [
				content.charAt(0),
				content.charAt(1),
				content.charAt(2),
				content.charAt(3),
				content.charAt(4),
				content.charAt(5),
				content.charAt(6),
				{elem: 'first-letter', content: content.charAt(7) },
				content.slice(8)
			];
		})
);
