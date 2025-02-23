/**
 * @author Zhicheng Wang
 * @create date 2021-07-23 20:33:45
 * @modify date 2021-07-24 21:15:48
 */

import React, { Component } from 'react'
import { Flex, Box } from '@rebass/grid'

import { ForLoop } from '../helper_components/Helper.jsx'
import { homepageSpacing } from '../../data/constants/Spacing'
import './LastestRecommand.scss'

class LastestRecommand extends Component {


    render() {

        const LastestRecommandContentRow = ({ index, colNum }) => {
            return <ForLoop loopNum={colNum}
                LoopContent={() => <Box width={1 / colNum} px={homepageSpacing.responsive_content_padding}>
                    <img className='Home-Content-img' src='fake_data/work_cover.jpg' />
                    <Flex className='text-start' >
                        <this.props.ContentWords styles={{ pl: '2px', fontSize: "12px !important" }} words={this.props.words} />
                    </Flex>
                </Box>}

                PackingContent={({ Output }) => <Flex pt={index === 0 ? '' : homepageSpacing.bottom_content_padding} flexWrap='wrap' className={"bottom-row-" + colNum} >
                    {Output}
                </Flex>} />
        }

        const LastestRecommandContentGrid = ({ rowNum, colNums }) => {
            return colNums.map(colNum => <ForLoop loopNum={rowNum}
                LoopContent={({ index }) => < LastestRecommandContentRow index={index} colNum={colNum} />} />)
        }

        return (
            <>
                <Flex mt={homepageSpacing.top_margin} mx={[homepageSpacing.main_margin_mobile, homepageSpacing.main_margin]}>
                    Recommendation | Latest
                </Flex>
                <Flex mt={homepageSpacing.top_margin} mx={[homepageSpacing.main_margin_mobile, homepageSpacing.main_margin]} className='text-center'>
                    <Box width={1}>
                        <LastestRecommandContentGrid rowNum={5} colNums={[5, 4, 2]} />
                    </Box>
                </Flex>
            </>
        )
    }
}

export default LastestRecommand