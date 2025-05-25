'use client';

import React, { useState, useEffect } from 'react';

interface FeedItem {
  id: number;
  title: string;
  description: string;
  type: string;
  timestamp: string;
  votes: number;
  comments: number;
  seenInWild: boolean;
}

const ThreatFeed = () => {
  const [feedItems, setFeedItems] = useState<FeedItem[]>([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    // Simulated feed data
    const generateFeed = () => {
      const items: FeedItem[] = [
        {
          id: 1,
          title: "New Zero-Day Vulnerability in OpenSSL",
          description: "A critical vulnerability has been discovered in OpenSSL affecting version 3.1.0 and earlier.",
          type: "Vulnerability",
          timestamp: new Date().toISOString(),
          votes: 15,
          comments: 3,
          seenInWild: true
        },
        {
          id: 2,
          title: "Suspicious Activity Detected in AWS",
          description: "Unusual login patterns detected from multiple AWS accounts in the same region.",
          type: "Suspicious Activity",
          timestamp: new Date().toISOString(),
          votes: 8,
          comments: 2,
          seenInWild: false
        }
      ];
      setFeedItems(items);
    };

    generateFeed();
  }, []);

  const handleVote = (id: number) => {
    setFeedItems(feedItems.map(item =>
      item.id === id ? { ...item, votes: item.votes + 1 } : item
    ));
  };

  const handleSeenInWild = (id: number) => {
    setFeedItems(feedItems.map(item =>
      item.id === id ? { ...item, seenInWild: true } : item
    ));
  };

  const handleComment = (id: number) => {
    if (newComment.trim()) {
      setFeedItems(feedItems.map(item =>
        item.id === id ? { ...item, comments: item.comments + 1 } : item
      ));
      setNewComment('');
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-4">Threat Feed</h2>
      
      <div className="space-y-4">
        {feedItems.map((item) => (
          <div key={item.id} className="bg-gray-800 p-6 rounded-lg shadow text-white" data-component-name="ThreatFeed">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-600">
                  {new Date(item.timestamp).toLocaleString()}
                </p>
              </div>
              <span className="px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-800">
                {item.type.toUpperCase()}
              </span>
            </div>

            <p className="mt-2">{item.description}</p>

            <div className="mt-4 flex space-x-4">
              <button
                onClick={() => handleVote(item.id)}
                className="flex items-center space-x-2 text-blue-600 hover:text-blue-800"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                </svg>
                <span>{item.votes}</span>
              </button>
              
              <button
                onClick={() => handleSeenInWild(item.id)}
                className="flex items-center space-x-2 text-green-600 hover:text-green-800"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Seen in Wild</span>
              </button>

              <div className="flex-1"></div>

              <div className="flex space-x-2">
                <span className="text-sm text-gray-600">Comments: {item.comments}</span>
                <input
                  type="text"
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Add comment..."
                  className="px-2 py-1 border rounded"
                />
                <button
                  onClick={() => handleComment(item.id)}
                  className="px-2 py-1 bg-blue-500 text-white rounded"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThreatFeed;
