"use client";

import Link from "next/link";

export default function PhishingAwarenessQuiz() {
	return (
		<div className="h-full p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg flex flex-col">
			<h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
				Phishing Awareness Quiz
			</h2>
			<div className="flex-grow flex flex-col justify-center">
				<div className="text-center mb-6">
					<div className="text-6xl mb-4">🎯</div>
					<h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
						Test Your Knowledge
					</h3>
					<p className="text-gray-600 dark:text-gray-300 mb-6">
						Learn to identify and avoid phishing attempts
					</p>
				</div>
				<div className="flex justify-center">
					<Link href="/dashboard/phishing-quiz">
						<button className="px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors">
							Start Quiz
						</button>
					</Link>
				</div>
			</div>
			<div className="mt-4 p-4 bg-teal-50 dark:bg-teal-900/20 rounded-lg">
				<p className="text-sm text-teal-800 dark:text-teal-200">
					Stay one step ahead of cybercriminals by recognizing their
					tactics.
				</p>
			</div>
		</div>
	);
}
