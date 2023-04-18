export interface AddressInfo {
	from: string;
	to: [string];
	subject: string;
	replyTo?: string;
}

export interface SignupTemplateData {
	templateId: "d-2631f912e5d74bd3b7b2bd5520e23630";
	data: {
		verificationCode: string;
	};
}

export interface ResetPasswordTemplateData {
	templateId: "d-131adb2bc11f4e66a8bafc4e6ddafef2";
	data: {
		resetPasswordCode: string;
	};
}

export interface SendWeeklyWinners {
	templateId: "d-3c9addb0168445328e035b6244145fcd";
	data: {
		text: string;
	};
}

export interface SendEmailGiveawayAnnouncement {
	templateId: "d-bb06178c3b89497bb867cfcf2fed37ea";
	data: {
		date: string;
		prizeCategory: string;
		img: string;
		lvl: string;
		day: string;
		prize: string;
	};
}

export type Template =
	| SendWeeklyWinners
	| SignupTemplateData
	| ResetPasswordTemplateData
	| SendEmailGiveawayAnnouncement;
