import type { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';
import { promises as fs } from 'fs';

type Faq = {
  question: string;
  keywords: string[];
  answer: string;
};

type FaqData = {
  faqs: Faq[];
  default: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const { message } = req.body;

    if (!message || typeof message !== 'string') {
      return res.status(400).json({ message: 'Invalid message format' });
    }

    // Find the absolute path to the data file
    const jsonDirectory = path.join(process.cwd(), 'src', 'data');
    const fileContents = await fs.readFile(path.join(jsonDirectory, 'faqs.json'), 'utf8');
    const faqData: FaqData = JSON.parse(fileContents);

    const userWords = message.toLowerCase().split(/\s+/);

    let bestMatch: Faq | null = null;
    let maxMatchCount = 0;

    faqData.faqs.forEach(faq => {
      const matchCount = faq.keywords.reduce((count, keyword) => {
        if (userWords.includes(keyword)) {
          return count + 1;
        }
        return count;
      }, 0);

      if (matchCount > maxMatchCount) {
        maxMatchCount = matchCount;
        bestMatch = faq;
      }
    });

    // Simulate a thinking delay for a better UX
    await new Promise(resolve => setTimeout(resolve, 800));

    if (bestMatch && maxMatchCount > 0) {
      res.status(200).json({ reply: bestMatch.answer });
    } else {
      res.status(200).json({ reply: faqData.default });
    }
  } catch (error) {
    console.error('Chatbot API Error:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
