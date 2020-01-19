<template>
  <q-page class="gradient-bg-primary q-pa-md" style="overflow:hidden">
    <div class="relative-position">
      <div class="q-pa-md rounded-borders relative-position bg-logo">
        <div
          class="row"
        >
          <div class="col-xs-12 text-h3 q-mb-md">
            {{ $t("index.welcome_to_esodac_member_client") }}
          </div>
        </div>
        <div class="row">
          <div
            class="col-xl-6 col-md-6 col-sm-12 col-xs-12  index_border_right_col q-px-xl"
          >
            <div class="column justify-between full-height">
              <div
                class="q-title text-text2 regular index-description"
              >
                <p>{{ $t("index.description_p1") }}</p>
                <p>{{ $t("index.description_p2") }}</p>
              </div>
              <div class="q-mb-lg">
                <q-btn
                  v-if="!getAccountName"
                  class="float-left q-px-xl"
                  size="lg"
                  color="primary"
                  :label="$t('index.signin')"
                  @click="login"
                />
                <q-btn
                  v-else
                  class="float-left q-px-xl"
                  size="lg"
                  color="primary"
                  :label="$t('index.signout')"
                  @click="logout"
                />
              </div>
            </div>
          </div>
          <div class="col-md-6 col-sm-12 col-xs-12 q-px-xl">
            <div class=" full-height">
              <div class="text-h5 q-mb-lg">
                {{ $t("index.key_features") }}
              </div>

              <div class="row text-text1 gutter-sm">
                <q-item class="col-xs-12 col-md-6">
                  <q-item-section avatar
                    ><q-icon
                      :name="$configFile.icon.member"
                      size="48px"
                      class="q-mr-sm text-text2"
                  /></q-item-section>
                  <q-item-section
                    ><span class="q-title">{{
                      $t("index.reg_as_member")
                    }}</span></q-item-section
                  >
                </q-item>
                <q-item class=" col-xs-12 col-md-6">
                  <q-item-section avatar
                    ><q-icon
                      :name="$configFile.icon.work_prop"
                      size="48px"
                      class="q-mr-sm text-text2"
                  /></q-item-section>
                  <q-item-section
                    ><span class="q-title">{{
                      $t("index.submit_wp")
                    }}</span></q-item-section
                  >
                </q-item>
                <q-item class=" col-xs-12 col-md-6">
                  <q-item-section avatar
                    ><q-icon
                      :name="$configFile.icon.constitution"
                      size="48px"
                      class="q-mr-sm text-text2"
                  /></q-item-section>
                  <q-item-section
                    ><span class="q-title">{{
                      $t("index.read_constitution")
                    }}</span></q-item-section
                  >
                </q-item>

                <q-item class=" col-xs-12 col-md-6">
                  <q-item-section avatar
                    ><q-icon
                      name="account_balance_wallet"
                      size="48px"
                      class="q-mr-sm text-text2"
                  /></q-item-section>
                  <q-item-section
                    ><span class="q-title">{{
                      $t("index.wallet")
                    }}</span></q-item-section
                  >
                </q-item>
                <q-item class=" col-xs-12 col-md-6">
                  <q-item-section avatar
                    ><q-icon
                      :name="$configFile.icon.cand_reg"
                      size="48px"
                      class="q-mr-sm text-text2"
                  /></q-item-section>
                  <q-item-section
                    ><span class="q-title">{{
                      $t("index.reg_as_cust_cand")
                    }}</span></q-item-section
                  >
                </q-item>
                <q-item class=" col-xs-12 col-md-6">
                  <q-item-section avatar
                    ><q-icon
                      :name="$configFile.icon.vote"
                      size="48px"
                      class="q-mr-sm text-text2"
                  /></q-item-section>
                  <q-item-section
                    ><span class="q-title">{{
                      $t("index.vote_cust")
                    }}</span></q-item-section
                  >
                </q-item>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row q-col-gutter-md justify-center q-px-md row_boxes_index_page">
        <div class="col-md-4 col-sm-12">
          <div class="column justify-between bg-primary shadow-14 rounded-borders full-height q-pa-md animate-pop">
            <div>
              <div class="text-h6 q-mb-lg">{{ $t("index.join_discord") }}</div>
              <div class="q-body-1 text-text2 relative-position">
                <q-icon
                  name="icon-social-discord-com"
                  size="48px"
                  class="absolute-top-left"
                />
                <div
                  style="display:inline-block;margin-left:55px;margin-top:-3px"
                >
                  {{ $t("index.discord_description") }}
                </div>
              </div>
            </div>
            <div class="q-mt-sm">
              <q-btn
                class="float-right"
                color="secondary"
                :label="$t('index.open_discord')"
                @click.native="openURL('https://discord.io/eosdac')"
              />
            </div>
          </div>
        </div>
        <div
          class="col-md-4 col-sm-12"
        >
          <div
            class="column justify-between bg-primary shadow-14 rounded-borders full-height q-pa-md animate-pop"
          >
            <div>
              <div class="text-h6 q-mb-lg">{{ $t("index.visit_eosdac") }}</div>
              <div class="q-body-1 text-text2 relative-position">
                <q-icon
                  name="icon-ui-21"
                  size="48px"
                  class="absolute-top-left"
                />
                <div
                  style="display:inline-block;margin-left:55px;margin-top:-3px"
                >
                  {{ $t("index.website_description") }}
                </div>
              </div>
            </div>
            <div class="q-mt-sm">
              <q-btn
                class="float-right"
                color="secondary"
                :label="$t('index.eosdac')"
                @click.native="openURL('https://eosdac.io')"
              />
            </div>
          </div>
        </div>
        <div
          class="col-md-4 col-sm-12"
        >
          <div class="column justify-between bg-primary shadow-14 rounded-borders full-height q-pa-md animate-pop">
            <div>
              <div class="text-h6 q-mb-lg">
                {{ $t("index.subscribe_newsletter") }}
              </div>
              <div class="q-body-1 text-text2 relative-position">
                <q-icon
                  name="icon-ui-22"
                  size="48px"
                  class="absolute-top-left"
                />
                <div
                  style="display:block;margin-left:55px;margin-top:-3px; width: calc(100% - 55px);"
                >
                  <q-input
                    class="q-mb-xs"
                    color="white"
                    v-model="email_address"
                    :stack-label="$t('index.your_email')"
                    @focus="onsubscribemsg = ''"
                  />
                  <q-select
                    color="white"
                    :stack-label="$t('index.your_language')"
                    @focus="onsubscribemsg = ''"
                    :options="[
                      {
                        label:
                          $t('lang_selector.languages.chinese') + ' - 中文',
                        value: 'Chinese'
                      },
                      {
                        label:
                          $t('lang_selector.languages.english_us') +
                          ' - English',
                        value: 'English'
                      },
                      {
                        label:
                          $t('lang_selector.languages.french') + ' - Français',
                        value: 'French'
                      },
                      {
                        label:
                          $t('lang_selector.languages.german') + ' - Deutsch',
                        value: 'German'
                      },
                      {
                        label:
                          $t('lang_selector.languages.italian') + ' - Italiano',
                        value: 'Italian'
                      },
                      {
                        label:
                          $t('lang_selector.languages.japanese') + ' - 日本語',
                        value: 'Japanese'
                      },
                      {
                        label:
                          $t('lang_selector.languages.korean') + ' - 한국어',
                        value: 'Korean'
                      },
                      {
                        label:
                          $t('lang_selector.languages.russian') + ' - Pусский',
                        value: 'Russian'
                      },
                      {
                        label:
                          $t('lang_selector.languages.spanish') + ' - Español',
                        value: 'Spanish (Mexico)'
                      }
                    ]"
                    v-model="language"
                  />
                </div>
              </div>
            </div>
            <div
              class="q-mt-sm row justify-between items-center"
            >
              <span class=" q-caption q-my-md"><q-spinner v-if="loading" /> {{ onsubscribemsg }}</span>
              <q-btn
                color="secondary"
                :label="$t('index.subscribe')"
                @click="subscribeNewsletter"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { openURL } from 'quasar'
import { mapGetters } from 'vuex'
export default {
  components: {},
  data () {
    return {
      email_address: '',
      language: '',
      onsubscribemsg: '',
      loading: false
    }
  },

  computed: {
    ...mapGetters({
      getAccountName: 'user/getAccountName'
    })
  },

  methods: {
    openURL,
    login () {
      this.$store.dispatch('global/login')
    },
    logout () {
      this.$store.dispatch('global/logout')
    },

    async subscribeNewsletter () {
      this.onsubscribemsg = ''
      let data = { email: this.email_address, language: this.language }

      if (!this.$helper.isEmail(this.email_address) || this.language === '') {
        this.onsubscribemsg = this.$t('index.valid_input_required')
        return false
      }

      let url =
        this.$helper.noBackSlash(this.$configFile.get('memberclientapi')) +
        '/subscribe'

      this.loading = true
      try {
        let result = await this.$axios.post(url, data)
        this.onsubscribemsg = this.$t('index.' + result.data.message)
        // console.log(result);
      } catch (e) {
        this.onsubscribemsg = this.$t('index.error_occured')
        console.log(e)
      }
      this.clearForm()
    },

    clearForm () {
      this.loading = false
      this.email_address = ''
      this.language = ''
    }
  }
}
</script>

<style lang="stylus">

.index_border_right_col{
  border-right:1px solid grey;
}
.row_boxes_index_page{
  top:-100px;
  transition: all .2s ease-in-out;
}
.partnerbox{
  top:0px;
  position:relative;
}

@media screen and (max-width: 1200px) {
  .partnerbox{
    top:40px!important;
  }
  .row_boxes_index_page{
    top:20px !important;
  }
  .index_border_right_col{
    border-right: none !important;
  }

}
</style>
