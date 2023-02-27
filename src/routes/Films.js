import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';
import { FilmCardList } from '../components/CardList/CardList';
import filmInfo from '../filmInfo';

const Films  = () => {
	return (
		<div>
			<ErrorBoundary>
				<FilmCardList filmInfo={filmInfo} />
			</ErrorBoundary>
			<div className='mt4 w-80 w-90-m center'>
				<h3 className='light-silver'>{filmInfo[0].title}</h3>
				<p>Thomas Anderson, a computer programmer, is led to fight an underground war against powerful computers who have constructed his entire reality with a system called the Matrix.</p>
				<FontAwesomeIcon icon={solid('star')} className='purple' />
				<FontAwesomeIcon icon={solid('star')} className='purple' />
				<FontAwesomeIcon icon={solid('star')} className='purple' />
				<FontAwesomeIcon icon={solid('star')} className='purple' />
				<FontAwesomeIcon icon={solid('star-half-stroke')} className='purple' />
				
				<h3 className='light-silver pt3'>{filmInfo[1].title}</h3>
				<p>At the Oracle's behest, Neo attempts to rescue the Key-maker and realises that to save Zion within 72 hours, he must confront the Architect. Meanwhile, Zion prepares for war against the machines.</p>
				<FontAwesomeIcon icon={solid('star')} className='purple' />
				<FontAwesomeIcon icon={solid('star')} className='purple' />
				<FontAwesomeIcon icon={solid('star')} className='purple' />
				<FontAwesomeIcon icon={solid('star')} className='purple' />
				
				<h3 className='light-silver pt3'>{filmInfo[2].title}</h3>
				<p>Neo, humanity's only hope of stopping the war and saving Zion, attempts to broker peace between the machines and humans. However, he must first confront his arch-nemesis, the rogue Agent Smith.</p>
				<FontAwesomeIcon icon={solid('star')} className='purple' />
				<FontAwesomeIcon icon={solid('star')} className='purple' />
				<FontAwesomeIcon icon={solid('star')} className='purple' />
				<FontAwesomeIcon icon={solid('star-half-stroke')} className='purple' />
				
				<h3 className='light-silver pt3'>{filmInfo[3].title}</h3>
				<p>Thomas Anderson's seemingly ordinary life ends when he accepts Morpheus's offer, only to wake up to a new, more secure and much more dangerous Matrix.</p>
				<FontAwesomeIcon icon={solid('star')} className='purple' />
				<FontAwesomeIcon icon={solid('star')} className='purple' />
				<FontAwesomeIcon icon={solid('star')} className='purple' />
			</div>
		</div>
	);
}

export default Films;