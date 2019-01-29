import React, { Component } from 'react'
import {connect} from 'react-redux';
import Select from 'react-select'
import {changeSelection} from '../../ac';
import 'react-day-picker/lib/style.css';

class SelectFilter extends Component {
    render() {
        return (
            <Select
                options={this.optionsForSelect}
                onChange={this.handleSelectChange}
                value={this.props.selectedOption}
                isMulti
            />
        )
    }

    get optionsForSelect() {
        return this.props.articles.map((item) => ({
            value: item.id,
            label: item.title
        }))
    }

    handleSelectChange = (selectedOption) => {
        this.props.changeSelection(selectedOption)
    }
}

const mapStateToProps = (state) => ({
    articles: state.articles,
    dateRange: state.filters.selected
})

const mapDispatchToProps = {
    changeSelection: changeSelection
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SelectFilter)
