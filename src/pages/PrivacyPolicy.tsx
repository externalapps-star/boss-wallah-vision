import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface PrivacySection {
  section_title: string;
  section_content: string;
}

interface PrivacyPolicyData {
  title: string;
  last_updated: string;
  content: PrivacySection[];
}

const PrivacyPolicy: React.FC = () => {
  const [privacyData, setPrivacyData] = useState<PrivacyPolicyData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPrivacyPolicy = async () => {
      try {
        // Try to fetch from the API first
        const response = await fetch(
          `https://website-api-prod-262620024912.asia-south1.run.app/home/get_privacy_policy`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
              request_type: '2',
            }).toString(),
          }
        );

        if (response.ok) {
          const data = await response.json();
          setPrivacyData(data);
          console.log(data);
        } else {
          setError('Failed to load privacy policy');
        }
      } catch (err) {
        console.error('Error fetching privacy policy:', err);
        setError('Failed to load privacy policy');
      } finally {
        setLoading(false);
      }
    };

    fetchPrivacyPolicy();
  }, []);


  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
              <p className="text-muted-foreground">Loading privacy policy...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-destructive mb-4">Error Loading Privacy Policy</h1>
            <p className="text-muted-foreground mb-4">{error}</p>
            <Button onClick={() => window.location.reload()}>
              Try Again
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Home Button */}
      <Button
        variant="ghost"
        onClick={() => navigate('/')}
        className="mb-6 flex items-center gap-2"
      >
        <ArrowLeft className="h-4 w-4" />
        Home
      </Button>

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-foreground mb-4">
          {privacyData?.title || 'Privacy Policy'}
        </h1>
        <p className="text-muted-foreground text-lg">
          Last updated: {privacyData?.last_updated || 'N/A'}
        </p>
        <hr className="mt-6 border-border" />
      </div>

      {/* Content */}
      <div className="prose prose-lg max-w-none">
        {privacyData?.content?.map((section, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              {section.section_title}
            </h2>
            <div 
              className="text-muted-foreground leading-relaxed"
              dangerouslySetInnerHTML={{ __html: section.section_content }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrivacyPolicy;
