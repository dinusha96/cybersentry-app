"use client";

import React, { useState } from "react";
import Link from "next/link";

interface Question {
	id: number;
	question: string;
	scenario: string;
	options: string[];
	correctAnswer: number;
	explanation: string;
}

const quizQuestions: Question[] = [
	{
		id: 1,
		question: "What should you do with this email?",
		scenario:
			"You receive an email from your bank stating: 'Dear Customer, Your account has been locked due to suspicious activity. Click here to verify your identity immediately.'",
		options: [
			"Click the link to verify your account",
			"Reply with your account details",
			"Contact your bank directly using their official phone number",
			"Forward the email to your friends to warn them",
		],
		correctAnswer: 2,
		explanation:
			"Always contact your bank directly through official channels. Legitimate banks never ask you to click on links to verify your account.",
	},
	{
		id: 2,
		question: "Which element makes this email suspicious?",
		scenario:
			"Subject: 'Urgent Invoice Payment Required!!!' From: accounting@company-invoices.net To: undisclosed-recipients",
		options: [
			"The subject line is in all caps",
			"Multiple exclamation marks and sense of urgency",
			"Generic domain name not matching a real company",
			"All of the above",
		],
		correctAnswer: 3,
		explanation:
			"Multiple red flags: sense of urgency, excessive punctuation, generic/suspicious domain, and hidden recipients are all common phishing tactics.",
	},
	{
		id: 3,
		question: "What's the best action for this message?",
		scenario:
			"You receive a text: 'Your package delivery failed. Click here to reschedule: http://tiny.cc/delivery-reschedule'",
		options: [
			"Click the link since you're expecting a package",
			"Check your delivery status on the courier's official website",
			"Reply asking for more information",
			"Click the link using incognito mode",
		],
		correctAnswer: 1,
		explanation:
			"Always verify shipping status through the official courier website by manually typing the URL or using their official app.",
	},
	{
		id: 4,
		question: "What's suspicious about this LinkedIn message?",
		scenario:
			"A LinkedIn connection sends: 'Hi! I saw your profile and have a great job opportunity! Download my company info: www.linkedin-jobs-verified.pdf.exe'",
		options: [
			"The message is too friendly",
			"The file has a .exe extension",
			"The website isn't the official LinkedIn domain",
			"Both B and C",
		],
		correctAnswer: 3,
		explanation:
			"Executable files (.exe) are dangerous and should never be downloaded from messages. Also, the domain is trying to look legitimate by including 'linkedin' but isn't the real LinkedIn domain.",
	},
	{
		id: 5,
		question: "How can you verify this sender's identity?",
		scenario:
			"An email from 'HR Department <hr.department.myself@gmail.com>' asks you to update your payroll information.",
		options: [
			"Reply to ask for their employee ID",
			"Check the email header and domain",
			"Call them using the number in the email",
			"Forward to your supervisor",
		],
		correctAnswer: 1,
		explanation:
			"Always verify the sender's email domain. A legitimate HR department would use the company's official email domain, not a generic gmail.com address.",
	},
];

export default function PhishingQuizPage() {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [score, setScore] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [showExplanation, setShowExplanation] = useState(false);
	const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

	const handleAnswerClick = (answerIndex: number) => {
		if (selectedAnswer !== null) return; // Prevent multiple answers
		setSelectedAnswer(answerIndex);

		if (answerIndex === quizQuestions[currentQuestion].correctAnswer) {
			setScore(score + 1);
		}
		setShowExplanation(true);
	};

	const handleNextQuestion = () => {
		const nextQuestion = currentQuestion + 1;
		setSelectedAnswer(null);
		setShowExplanation(false);

		if (nextQuestion < quizQuestions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};

	const resetQuiz = () => {
		setCurrentQuestion(0);
		setScore(0);
		setShowScore(false);
		setShowExplanation(false);
		setSelectedAnswer(null);
	};

	if (showScore) {
		return (
			<div className="p-8 max-w-4xl mx-auto">
				<div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 text-center">
					<h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
						Quiz Complete! 🎉
					</h2>
					<p className="text-xl mb-4 text-gray-700 dark:text-gray-300">
						You scored {score} out of {quizQuestions.length}
					</p>
					<p className="mb-6 text-gray-600 dark:text-gray-400">
						{score === quizQuestions.length
							? "Perfect score! You're a phishing detection expert! 🏆"
							: score >= quizQuestions.length * 0.7
							? "Great job! You're well-prepared to identify phishing attempts! 🌟"
							: "Keep learning! Practice makes perfect in identifying phishing attempts. 📚"}
					</p>
					<div className="flex gap-4 justify-center">
						<Link
							href="/dashboard"
							className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
						>
							Back to Dashboard
						</Link>
						<button
							onClick={resetQuiz}
							className="px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
						>
							Try Again
						</button>
					</div>
				</div>
			</div>
		);
	}

	const currentQuiz = quizQuestions[currentQuestion];

	return (
		<div className="p-8 max-w-4xl mx-auto">
			<div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
				<div className="mb-6">
					<div className="flex justify-between items-center mb-4">
						<div className="flex items-center gap-4">
							<Link
								href="/dashboard"
								className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm"
							>
								← Back
							</Link>
							<h2 className="text-xl font-bold text-gray-900 dark:text-white">
								Question {currentQuestion + 1} of{" "}
								{quizQuestions.length}
							</h2>
						</div>
						<span className="text-sm text-gray-600 dark:text-gray-400">
							Score: {score}
						</span>
					</div>
					<div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
						<div
							className="h-full bg-teal-600 rounded-full transition-all duration-300"
							style={{
								width: `${
									((currentQuestion + 1) /
										quizQuestions.length) *
									100
								}%`,
							}}
						/>
					</div>
				</div>

				<div className="mb-8">
					<h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
						{currentQuiz.question}
					</h3>
					<div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg mb-4">
						<p className="text-gray-700 dark:text-gray-300">
							{currentQuiz.scenario}
						</p>
					</div>
				</div>

				<div className="space-y-3">
					{currentQuiz.options.map((option, index) => (
						<button
							key={index}
							onClick={() => handleAnswerClick(index)}
							disabled={showExplanation}
							className={`w-full p-4 text-left rounded-lg transition-colors ${
								showExplanation
									? index === currentQuiz.correctAnswer
										? "bg-green-100 dark:bg-green-900/20 border-2 border-green-500"
										: selectedAnswer === index
										? "bg-red-100 dark:bg-red-900/20 border-2 border-red-500"
										: "bg-gray-50 dark:bg-gray-700"
									: selectedAnswer === index
									? "bg-teal-100 dark:bg-teal-900/20 border-2 border-teal-500"
									: "bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600"
							}`}
						>
							<span className="text-gray-700 dark:text-gray-300">
								{option}
							</span>
						</button>
					))}
				</div>

				{showExplanation && (
					<div className="mt-6">
						<div
							className={`p-4 rounded-lg ${
								selectedAnswer === currentQuiz.correctAnswer
									? "bg-green-100 dark:bg-green-900/20"
									: "bg-red-100 dark:bg-red-900/20"
							}`}
						>
							<p className="text-gray-700 dark:text-gray-300">
								{currentQuiz.explanation}
							</p>
						</div>
						<button
							onClick={handleNextQuestion}
							className="mt-4 px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors w-full"
						>
							{currentQuestion === quizQuestions.length - 1
								? "Finish Quiz"
								: "Next Question"}
						</button>
					</div>
				)}
			</div>
		</div>
	);
}
