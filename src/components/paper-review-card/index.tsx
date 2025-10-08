import { Fragment } from 'react';
import { AiOutlineRead } from 'react-icons/ai';
import { SanitizedPaperReview } from '../../interfaces/sanitized-config';
import { skeleton } from '../../utils';

const PaperReviewCard = ({
  paperReviews,
  loading,
}: {
  paperReviews: SanitizedPaperReview[];
  loading: boolean;
}) => {
  const renderSkeleton = () => {
    const array: React.ReactElement[] = [];
    for (let index = 0; index < Math.max(paperReviews.length, 2); index++) {
      array.push(
        <div className="card shadow-md card-sm bg-base-100" key={index}>
          <div className="p-8 h-full w-full">
            <div className="flex items-center flex-col">
              <div className="w-full">
                <div className="px-4">
                  <div className="text-center w-full">
                    <h2 className="mb-2">
                      {skeleton({
                        widthCls: 'w-40',
                        heightCls: 'h-8',
                        className: 'mb-2 mx-auto',
                      })}
                    </h2>
                    <div>
                      {skeleton({
                        widthCls: 'w-24',
                        heightCls: 'h-4',
                        className: 'mb-2 mx-auto',
                      })}
                    </div>
                    <div>
                      {skeleton({
                        widthCls: 'w-full',
                        heightCls: 'h-4',
                        className: 'mb-2 mx-auto',
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>,
      );
    }
    return array;
  };

  const renderList = () => {
    return paperReviews.map((item, index) => (
      <a
        className="card shadow-md card-sm bg-base-100 cursor-pointer"
        key={index}
        href={item.link}
        target="_blank"
        rel="noreferrer"
      >
        <div className="p-8 h-full w-full">
          <div className="flex items-center flex-col">
            <div className="w-full">
              <div className="px-4">
                <div className="text-center w-full">
                  <h2 className="font-medium opacity-60 mb-2">{item.title}</h2>
                  {(item.venue || item.year) && (
                    <p className="text-base-content opacity-50 text-sm">
                      {[item.venue, item.year].filter(Boolean).join(' · ')}
                    </p>
                  )}
                  {item.summary && (
                    <p className="mt-2 text-base-content text-sm text-justify">
                      {item.summary}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    ));
  };

  return (
    <Fragment>
      <div className="col-span-1 lg:col-span-2">
        <div className="card bg-base-2 00 shadow-xl border border-base-300">
          <div className="card-body p-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
              <div className="flex items-center space-x-3">
                {loading ? (
                  skeleton({
                    widthCls: 'w-12',
                    heightCls: 'h-12',
                    className: 'rounded-xl',
                  })
                ) : (
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl">
                    <AiOutlineRead className="text-2xl" />
                  </div>
                )}
                <div className="min-w-0 flex-1">
                  <h3 className="text-base sm:text-lg font-bold text-base-content truncate">
                    {loading
                      ? skeleton({ widthCls: 'w-44', heightCls: 'h-8' })
                      : 'Paper Reviews'}
                  </h3>
                  <div className="text-base-content/60 text-xs sm:text-sm mt-1 truncate">
                    {loading
                      ? skeleton({ widthCls: 'w-32', heightCls: 'h-4' })
                      : `Showcasing ${paperReviews.length} reviews`}
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {loading ? renderSkeleton() : renderList()}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default PaperReviewCard;


