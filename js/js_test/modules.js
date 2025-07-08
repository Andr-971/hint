
const dataOutput = (...out) => {
	let out_ = out.map((el) => {
		if (typeof el === "object") {
			let res = "";
			for (const [key, value] of Object.entries(el)) {
				let key_ = `<div class="item">&#160;&#160;&#160;&#160;<span class="key">${key}:</span>`;
				if (typeof value === "number") {
					res += `${key_}&#160;&#160;&#160;&#160;<span class="number">${value}</span></div>`;
				}
				if (typeof value === "string") {
					res += `${key_}&#160;&#160;&#160;&#160;<span class="value">"${value}"</span></div>`;
				}
			}
			if (Array.isArray(el)) return `<ul class="square-brackets">[${res}]</ul>`;
			return `<ul class="curly-brackets">{${res}}</ul>`;
		}
		if (typeof el === "string") {
			return `<div class="item">${el}</div>`;
		}
		if (typeof el === "number") {
			return `<div class="item number">${el}</div>`;
		}
		if (typeof el === "boolean") {
			return `<div class="item bool">${el}</div>`;
		}
	});
	return $.ready(() => {
		$(".output").html(out_.join(""));
	});
};

export default dataOutput;