import { L, K, by } from 'camarche/core'
import { show } from 'camarche/faith'
import { pinpoint, as_point } from 'camarche/optics'

import { time_unit, maybe } from './types'
import { nav, signup_view, login_view, in_features, in_view, main_view, settings_view, profile_view, activity_view } from './types'
import { user_state, team_state } from './state'

// TODO: why doesn't this work? f => pinpoint (L .lazy (pinpoint (pinpoint, f)))
var Y = f => pinpoint (L .lazy (rec => f (pinpoint (rec))))  

export default Y (screen_ =>
by (pinpoint (
L .choice
( as_point (nav .login) (_ => nav .login (login_view ('', '', maybe .nothing, false)))
, as_point (nav .signup) (_ => nav .signup (signup_view ('', '', '', false)))
, as_point (nav .in) (_ => _features => nav .in (_features, screen_ (in_view .main)))
, as_point (in_view .main) (_ => in_view .main (screen_ (main_view .main)))
, as_point (in_view .contest) (_ => in_view .contest (screen_ (contest_view .contest)))
, as_point (main_view .main) (_ => main_view .main)
, as_point (main_view .profile) (_ => main_view .profile (profile_view (show (user_state), false)))
, as_point (main_view .awards) (_ => main_view .awards)
, as_point (main_view .activity) (_ => main_view .activity (activity_view (time_unit .hour)))
, as_point (main_view .map) (_ => main_view .map)
, as_point (main_view .settings) (_ => main_view .settings (settings_view .settings))
, as_point (settings_view .settings) (_ => settings_view .settings)
, as_point (settings_view .about) (_ => settings_view .about)
, as_point (contest_view .contest) (_ => contest_view .contest)
, as_point (contest_view .individual_rank) (_ => contest_view .individual_rank)
, as_point (contest_view .team_formation) (_ => contest_view .team_formation)
, as_point (contest_view .team_rank) (_ => contest_view .team_rank)
, L .valueOr (K ()) ) ) ) )